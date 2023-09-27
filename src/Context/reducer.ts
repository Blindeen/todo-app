import { StateType, User } from 'Context/context';
import { setLocalStorage, clearLocalStorage } from 'utils';

export type PayloadType = {
  user: User;
  token: string;
};

export type ContextAction = {
  type: 'signIn' | 'signOut';
  payload: PayloadType;
};

export const Reducer = (state: StateType, action: ContextAction) => {
  const { type, payload } = action;
  const { user, token } = payload;

  switch (type) {
    case 'signIn':
      setLocalStorage('token', token);
      return { ...state, isLogged: true, user: user };
    case 'signOut':
      clearLocalStorage();
      return { ...state, isLogged: false, user: { name: '', email: '' } };
    default:
      return state;
  }
};
