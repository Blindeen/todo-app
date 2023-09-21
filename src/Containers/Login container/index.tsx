import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledForm } from './styles';
import { login } from './login';

import Background from 'Components/Background';
import Loader from 'Components/Loader';
import { StyledButton } from 'Components/Button/styles';
import { StyledHeader } from 'Components/Header/styles';
import { StyledInput } from 'Components/Input/styles';

import pushNotification from 'pushNotification';
import { LoginPayload } from 'interfaces';
import { setLocalStorage } from 'utils';
import { routes } from 'routes';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const credentials: LoginPayload = { email, password };
    try {
      const response = await login(credentials);
      const responseBody = await response.json();

      if (response.ok) {
        const { token } = responseBody;
        pushNotification('success', 'Signed up', 'Signed up successfully');
        setLocalStorage('token', token);
        navigate(routes.todo);
      } else {
        const { errors } = responseBody;
        Object.entries(errors).forEach(([key, value]) => {
          pushNotification('error', key, `${value}`);
        });
      }
    } catch {
      pushNotification('error', 'Server\'s error', 'Server is down');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <Loader loading={loading} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledForm onSubmit={onSubmit} autoComplete='on'>
        <StyledInput
          type='email'
          name='email'
          placeholder='Email'
          maxLength={128}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required={true}
        />
        <StyledInput
          type='password'
          name='password'
          placeholder='Password'
          maxLength={1024}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required={true}
        />
        <StyledButton type='submit'>Sign in</StyledButton>
      </StyledForm>
      <span>Don't have an account? Register</span>
    </Background>
  );
};

export default LoginContainer;
