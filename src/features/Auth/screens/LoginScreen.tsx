import React from 'react';
import { useLogin } from '../hooks/useLogin';

const LoginScreen = () => {
  const loginMutation = useLogin();

  const handleLogin = async () => {
    const response = await loginMutation.mutateAsync({
      email: '',
      password: '',
    });
  };

  return <></>;
};

export default LoginScreen;
