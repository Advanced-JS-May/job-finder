import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import FacebookSvgIcon from '../FacebookSvgIcon/FacebookSvgIcon';
import GoogleSvgIcon from '../GoogleSvgIcon/GoogleSvgIcon';

function EmployerRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleNameInput = ({ target: { value } }) => setName(value);

  const handleEmailInput = ({ target: { value } }) => setEmail(value);

  const handlePasswordInput = ({ target: { value } }) => setPassword(value);

  const handlePassword2Input = ({ target: { value } }) => setPassword2(value);

  return (
    <div>
      <form autoComplete="off">
        {/* <section>
          <label>Company's name</label>
          <TextField
            color="primary"
            required
            id="outlined-required"
            label="Required"
            variant="outlined"
            onChange={handleNameInput}
            value={name}
            helperText=""
            error={false}
          />
        </section> */}
        <section>
          <label>email</label>
          <TextField
            color="primary"
            required
            id="outlined-required"
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
            id="outlined-required"
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
            id="outlined-required"
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
          <Button color="primary">Submit</Button>
          <Button color="secondary">Cancel</Button>
        </ButtonGroup>
        <Divider />
        <ButtonGroup aria-label="outlined primary button group">
          <Button color="primary">
            <FacebookSvgIcon width="40" />
          </Button>
          <Button color="secondary">
            <GoogleSvgIcon width="40" />
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default EmployerRegister;
