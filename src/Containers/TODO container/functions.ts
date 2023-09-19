import { Task } from 'interfaces';
import { compareTasks } from 'utils';

export const toggleIsDone = (idx: number, tasks: Task[]) => {
  const updatedList = [
    ...tasks.slice(0, idx),
    {
      ...tasks[idx],
      isDone: !tasks[idx].isDone,
    },
    ...tasks.slice(idx + 1),
  ];

  return [...updatedList].sort(compareTasks);
};

export const deleteTask = (idx: number, tasks: Task[]) => {
  const editedList = [...tasks];
  editedList.splice(idx, 1);

  return editedList;
};

export const editTask = (idx: number, tasks: Task[], newText: string) => {
  return [
    ...tasks.slice(0, idx),
    {
      ...tasks[idx],
      description: newText,
    },
    ...tasks.slice(idx + 1),
  ];
};
