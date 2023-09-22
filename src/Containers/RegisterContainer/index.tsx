import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from 'Containers/RegisterContainer/register';

import Background from 'Components/Background';
import Loader from 'Components/Loader';
import Input from 'Components/Input';
import { StyledHeader } from 'Components/Header/styles';
import { StyledForm } from 'Components/Form/styles';
import { StyledButton } from 'Components/Button/styles';
import { StyledLink } from 'Components/Link/styles';

import { routes } from 'routes';
import { RegisterPayload } from 'interfaces';
import { setLocalStorage } from 'utils';
import pushNotification from 'pushNotification';

const RegisterContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const credentials: RegisterPayload = { name, email, password };
    try {
      const response = await register(credentials);
      const responseBody = await response.json();

      if (response.ok) {
        const { token } = responseBody;
        setLocalStorage('token', token);
        pushNotification('success', 'Signed up', 'Signed up successfully');
        navigate(routes.todo);
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
      <StyledHeader>Sign up</StyledHeader>
      <StyledForm onSubmit={onSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          maxLength={128}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
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
        <StyledButton type="submit">Sign up</StyledButton>
      </StyledForm>
      <span>
        Already have an account? <StyledLink onClick={() => navigate(routes.login)}>Sign in</StyledLink>
      </span>
    </Background>
  );
};

export default RegisterContainer;
