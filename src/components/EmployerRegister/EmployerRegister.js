import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/* UI */
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FacebookSvgIcon from '../FacebookSvgIcon/FacebookSvgIcon';
import GoogleSvgIcon from '../GoogleSvgIcon/GoogleSvgIcon';

/* firebase */
import { useAuth } from '../../services/authentication';

function EmployerRegister() {
  const { signup } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const handleEmailInput = ({ target: { value } }) => setEmail(value);
  const handlePasswordInput = ({ target: { value } }) => setPassword(value);
  const handlePassword2Input = ({ target: { value } }) => setPassword2(value);

  const handleRegister = () => {
    signup(email, password)
      .then((user) => {
        history.push('/email-verification');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const isInvalid = password !== password2 || password === '' || email === '';
  const handleFormCancel = () => history.push('/');
  return (
    <div>
      <form autoComplete="off">
        <section>
          <label>email</label>
          <TextField
            color="primary"
            required
            label="Required"
            variant="outlined"
            helperText=""
            error={false}
            onChange={handleEmailInput}
            value={email}
            type="email"
          />
        </section>
        <section>
          <label>password</label>
          <TextField
            color="primary"
            required
            label="Required"
            variant="outlined"
            helperText=""
            error={false}
            onChange={handlePasswordInput}
            value={password}
            type="password"
          />
        </section>
        <section>
          <label>repeat your password</label>
          <TextField
            color="primary"
            required
            label="Required"
            variant="outlined"
            helperText=""
            error={false}
            onChange={handlePassword2Input}
            value={password2}
            type="password"
          />
        </section>
        <ButtonGroup aria-label="outlined primary button group">
          <Button disabled={isInvalid} onClick={handleRegister} color="primary">
            Submit
          </Button>
          <Button onClick={handleFormCancel} color="secondary">
            Cancel
          </Button>
        </ButtonGroup>
        <p>{error}</p>
        <Divider />
        <ButtonGroup aria-label="outlined primary button group">
          <Button color="primary">
            <FacebookSvgIcon width="40" />
          </Button>
          <Button color="primary">
            <GoogleSvgIcon width="40" />
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default EmployerRegister;
