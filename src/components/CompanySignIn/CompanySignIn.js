import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../services/authentication';

export default function CompanySignIn() {
  const history = useHistory();

  const [email, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuth();

  const handleLoginUpdate = ({ target: { value } }) => setLogin(value);
  const handlePasswordUpdate = ({ target: { value } }) => setPassword(value);

  const handleLogin = () => {
    signin(email, password)
      .then(() => {
        history.push('/signin/company');
      })
      .catch(console.warn);
  };

  return (
    <>
      <label>
        Login:
        <br />
        <input value={email} onChange={handleLoginUpdate} />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input value={password} onChange={handlePasswordUpdate} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
