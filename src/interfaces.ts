import React from 'react';

export interface Task {
  description: string;
  isDone: boolean;
}

export interface TaskProps {
  decoration: 'line-through' | 'none';
}

export interface CheckboxProps {
  onClick: () => void;
  checked: boolean;
}

export interface BackgroundProps {
  children: React.ReactNode;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

export interface LoaderProps {
  loading: boolean;
}
