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
import {setLocalStorage, getLocalStorage, isStringValid} from "../../utils";

interface TaskInterface {
  name: string,
  isDone: boolean,
}

const TODOContainer = () => {
  const tasksStorage = JSON.parse(localStorage.getItem("tasks") || "");
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<TaskInterface[]>(tasksStorage ? tasksStorage : []);

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(taskList)), [taskList]);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (!isStringValid(trimmedValue)) {
      e.currentTarget.reset();
      return;
    }

    const newValue: TaskInterface = {
      name: trimmedValue,
      isDone: false,
    };
    setTaskList([...taskList, newValue]);

    setInputValue("");
    e.currentTarget.reset();
  }

  const toggleIsDone = (idx: number) => {
    const updatedList = [...taskList];
    updatedList[idx].isDone = !updatedList[idx].isDone;

    updatedList.sort((a, b) => {
      if (a.isDone > b.isDone) {
        return 1;
      }
      else if (a.isDone < b.isDone) {
        return -1;
      }
      else {
        return 0;
      }
    });

    setTaskList(updatedList);
  }

  const taskSet = taskList.map((task, idx) => (
    <Task key={idx} onClick={toggleIsDone.bind(null, idx)} decoration={task.isDone ? "line-through" : "none"}>
      {task.name}
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
            defaultValue={getLocalStorage("header")}
          />
          <TaskListArea>
            {taskSet}
          </TaskListArea>
          <form onSubmit={onFormSubmit}>
            <StyledInput title="task-input" name="task" type="text" onChange={onInputChange}/>
          </form>
        </RightAreaDiv>
      </NotebookArea>
    </BackgroundContainer>
  );
};

export default TODOContainer;
