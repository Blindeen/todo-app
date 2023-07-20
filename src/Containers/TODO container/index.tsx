import React, {useEffect, useState} from "react";

import {
  BackgroundContainer,
  LeftAreaDiv,
  NotebookArea,
  RightAreaDiv,
  Circle,
  HeaderArea,
  StyledInput, TaskListArea, Task
} from "./styles";
import {TaskInterface, setLocalStorage, getLocalStorage, isStringValid, compareTasks} from "../../utils";

const TODOContainer = () => {
  const tasksStorage = getLocalStorage("tasks");
  const tasksArray = tasksStorage ? JSON.parse(tasksStorage) : null;

  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<TaskInterface[]>(
    tasksArray ? tasksArray : []
  );

  useEffect(() => setLocalStorage("tasks", JSON.stringify(taskList)), [taskList]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  const toggleIsDone = (idx: number) => {
    const updatedList = [...taskList];

    updatedList[idx].isDone = !updatedList[idx].isDone;
    updatedList.sort(compareTasks);

    setTaskList(updatedList);
  }

  const taskSet = taskList.map((task, idx) => (
    <Task key={idx} onClick={toggleIsDone.bind(null, idx)} decoration={task.isDone ? "line-through" : "none"}>
      {task.description}
    </Task>
  ));

  return (
    <BackgroundContainer>
      <NotebookArea>
        <LeftAreaDiv>
          <Circle/>
          <Circle/>
          <Circle/>
        </LeftAreaDiv>
        <RightAreaDiv>
          <HeaderArea
            title="header"
            rows={1}
            maxLength={20}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setLocalStorage("header", e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => (e.key === "Enter") && e.preventDefault()}
            defaultValue={getLocalStorage("header")}
          />
          <TaskListArea>
            {taskSet}
          </TaskListArea>
          <form onSubmit={onFormSubmit}>
            <StyledInput title="task-input" name="task" type="text" onKeyDown={onKeyDown}/>
          </form>
        </RightAreaDiv>
      </NotebookArea>
    </BackgroundContainer>
  );
};

export default TODOContainer;
