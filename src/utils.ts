export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getLocalStorage = (key: string) => localStorage.getItem(key) || "";

export const isStringValid = (str: string) => {
  const regex = /^$/;

  return !regex.test(str);
}
