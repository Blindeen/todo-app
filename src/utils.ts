import { Task } from 'interfaces';

export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getLocalStorage = (key: string) => localStorage.getItem(key) || '';

export const clearLocalStorage = () => localStorage.clear();

export const isStringValid = (str: string) => {
  const regex = /^$/;

  return !regex.test(str);
};

export const compareTasks = (a: Task, b: Task) => Number(a.isDone) - Number(b.isDone);
