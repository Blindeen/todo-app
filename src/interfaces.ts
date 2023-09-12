export interface Task {
  description: string,
  isDone: boolean,
}

export interface TaskProps {
  decoration: "line-through" | "none";
}

export interface CheckboxProps {
  onClick: () => void;
  checked: boolean;
}
