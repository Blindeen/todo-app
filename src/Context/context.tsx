import React, { createContext, useReducer } from 'react';

import { Reducer } from 'Context/reducer';

export type User = {
  name: string;
  email: string;
};

export type StateType = {
  isLogged: boolean;
  user: User;
};

const initialState: StateType = {
  isLogged: false,
  user: {
    name: '',
    email: '',
  },
};

export const Context = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
