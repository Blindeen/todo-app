import React, {useEffect, useState} from "react";

import * as Components from "./styles";
import {toggleIsDone, editTask, deleteTask} from "./functions";
import {TaskInterface, setLocalStorage, getLocalStorage, isStringValid} from "../../utils";

const TODOContainer = () => {
  const taskStorage = getLocalStorage("tasks");
  const taskArray = taskStorage ? JSON.parse(taskStorage) : null;

  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<TaskInterface[]>(
    taskArray ? taskArray : []
  );

  useEffect(() => setLocalStorage("tasks", JSON.stringify(taskList)), [taskList]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (!isStringValid(trimmedValue)) {
      e.currentTarget.reset();
      return;
    }

    const newValue: TaskInterface = {
      description: trimmedValue,
      isDone: false,
    };
    setTaskList([...taskList, newValue]);

    setInputValue("");
    e.currentTarget.reset();
  }

  const taskSet = taskList.map((task, idx) => (
    <Components.Task
      key={idx}
      decoration={task.isDone ? "line-through" : "none"}
    >
      <input type="checkbox" onChange={() => setTaskList(toggleIsDone(idx, taskList))} checked={task.isDone}/>
      {task.description}
      <Components.StyledPropertiesDiv>
        <Components.StyledEditTaskIcon onClick={() => setTaskList(editTask(idx, taskList, task.description))}/>
        <Components.StyledDeleteTaskIcon
          onClick={() => window.confirm("Do you want to remove this task?") && setTaskList(deleteTask(idx, taskList))}/>
      </Components.StyledPropertiesDiv>
    </Components.Task>
  ));

  return (
    <Components.BackgroundContainer>
      <Components.NotebookArea>
        <Components.LeftAreaDiv>
          <Components.Circle/>
          <Components.Circle/>
          <Components.Circle/>
        </Components.LeftAreaDiv>
        <Components.RightAreaDiv>
          <Components.HeaderArea
            title="header"
            rows={1}
            maxLength={20}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setLocalStorage("header", e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => (e.key === "Enter") && e.preventDefault()}
            defaultValue={getLocalStorage("header")}
            spellCheck={false}
          />
          <Components.TaskListArea>
            {taskSet}
          </Components.TaskListArea>
          <Components.InputDiv>
            <form onSubmit={onSubmit}>
              <Components.StyledInput
                title="task-input"
                type="text"
                placeholder="Enter task"
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                spellCheck={false}
              />
            </form>
            <Components.StyledDeleteIcon
              onClick={() => window.confirm("Are you sure you want to clear this list?") && setTaskList([])}
            />
          </Components.InputDiv>
        </Components.RightAreaDiv>
      </Components.NotebookArea>
    </Components.BackgroundContainer>
  );
};

export default TODOContainer;
