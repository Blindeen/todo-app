import React, { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from './login';

import Background from 'Components/Background';
import Loader from 'Components/Loader';
import Input from 'Components/Input';
import { StyledForm } from 'Components/Form/styles';
import { StyledButton } from 'Components/Button/styles';
import { StyledHeader } from 'Components/Header/styles';
import { StyledLink } from 'Components/Link/styles';

import pushNotification from 'pushNotification';
import { LoginPayload } from 'interfaces';
import { routes } from 'routes';
import { Context } from 'Context/context';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const credentials: LoginPayload = { email, password };
    try {
      const response = await login(credentials);
      const responseBody = await response.json();

      if (response.ok) {
        const { token, name, email } = responseBody;
        dispatch({
          type: 'signIn',
          payload: {
            user: {
              name: name,
              email: email,
            },
            token: token,
          },
        });

        pushNotification('success', 'Signed in', 'Signed in successfully', 2);
        setTimeout(() => navigate(routes.todo), 2000);
      } else {
        const { errors } = responseBody;
        Object.entries(errors).forEach(([key, value]) => {
          pushNotification('error', key, `${value}`);
        });
      }
    } catch {
      pushNotification('error', "Server's error", 'Server is down');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <Loader loading={loading} />
      <StyledHeader>Sign in</StyledHeader>
      <StyledForm onSubmit={onSubmit} autoComplete="on">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          maxLength={128}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          maxLength={1024}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Sign in</StyledButton>
      </StyledForm>
      <span>
        Don't have an account? <StyledLink onClick={() => navigate(routes.register)}>Register</StyledLink>
      </span>
    </Background>
  );
};

export default LoginContainer;
