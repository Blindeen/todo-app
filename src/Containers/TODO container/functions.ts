import {compareTasks, TaskInterface} from "../../utils";

export const toggleIsDone = (idx: number, tasks:TaskInterface[]) => {
  const updatedList = [
    ...tasks.slice(0, idx),
    {
      ...tasks[idx],
      isDone: !tasks[idx].isDone,
    },
    ...tasks.slice(idx+1),
  ];
  updatedList.sort(compareTasks);

  return updatedList;
}

export const deleteTask = (idx: number, tasks: TaskInterface[]) => {
  const editedList = [...tasks];
  editedList.splice(idx, 1);

  return editedList;
}

export const editTask = (idx: number, tasks:TaskInterface[], text: string) => {
  const newText = window.prompt("Change description", text);
  if (newText) {
    return [
      ...tasks.slice(0, idx),
      {
        ...tasks[idx],
        description: newText,
      },
      ...tasks.slice(idx+1),
    ];
  }

  return tasks;
}
