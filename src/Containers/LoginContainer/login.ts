import { LoginPayload } from 'interfaces';
import API_URL from 'API_URL';

export const login = async (credentials: LoginPayload) => {
  return await fetch(`${API_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};
