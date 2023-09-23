import { StateType, User } from 'Context/context';

type ContextAction = {
  type: 'signIn' | 'signOut';
  payload: User;
};

export const Reducer = (state: StateType, action: ContextAction) => {
  switch (action.type) {
    case 'signIn':
      return { ...state, isLogged: true, user: action.payload };
    case 'signOut':
      return { ...state, isLogged: false, user: { name: '', email: '' } };
    default:
      return state;
  }
};
