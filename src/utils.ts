export interface TaskInterface {
  name: string,
  isDone: boolean,
}

export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getLocalStorage = (key: string) => localStorage.getItem(key) || "";

export const isStringValid = (str: string) => {
  const regex = /^$/;

  return !regex.test(str);
}

export const compareTasks = (a: TaskInterface, b: TaskInterface) => {
  if (a.isDone > b.isDone) {
    return 1;
  } else if (a.isDone < b.isDone) {
    return -1;
  } else {
    return 0;
  }
}
