export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getLocalStorage = (key: string) => localStorage.getItem(key) || "";
