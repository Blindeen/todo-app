import { RegisterPayload } from 'interfaces';
import API_URL from 'API_URL';

export const register = async (credentials: RegisterPayload) => {
  return await fetch(`${API_URL}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};
