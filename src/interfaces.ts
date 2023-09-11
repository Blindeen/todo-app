export interface Task {
  description: string,
  isDone: boolean,
}

export interface TaskProps {
  decoration: string;
}

export interface CheckboxProps {
  onClick: () => void;
  checked: boolean;
}
