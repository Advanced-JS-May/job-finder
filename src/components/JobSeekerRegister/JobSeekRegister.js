import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
/* UI */
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import FacebookButton from '../buttons/FacebookButton/FacebookButton';
import GoogleButton from '../buttons/GoogleButton/GoogleButton';
/* Authentication */
import { useAuth } from '../../services/authentication';
import { USER_ROLES } from '../../constants/user.constants';
/* validation */
import validate from '../../Utils/validate.helper';

function EmployerRegister() {
  const { signup } = useAuth();
  const history = useHistory();

  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate,
    onSubmit: ({ email, password }) => {
      signup(email, password, USER_ROLES.user)
        .then(() => {
          history.push('/email-verification');
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    },
  });

  const emailCheck = formik.touched.email && formik.errors.email ? true : false;

  const passwordCHeck =
    formik.touched.password && formik.errors.password ? true : false;

  const passwordConfirmCheck =
    formik.touched.passwordConfirm && formik.errors.passwordConfirm
      ? true
      : false;

  return (
    <Box style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }}
        autoComplete="off"
      >
        <TextField
          type="email"
          name="email"
          error={emailCheck}
          value={formik.values.email}
          label={emailCheck ? formik.errors.email : 'email'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          color="primary"
          required
          style={{
            margin: '0 0 10px',
          }}
        />

        <TextField
          type="password"
          name="password"
          error={passwordCHeck}
          value={formik.values.password}
          label={passwordCHeck ? formik.errors.password : 'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          color="primary"
          required
          style={{
            margin: '0 0 10px',
          }}
        />

        <TextField
          type="password"
          name="passwordConfirm"
          error={passwordConfirmCheck}
          label={
            passwordConfirmCheck
              ? formik.errors.passwordConfirm
              : 'confirm password'
          }
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          color="primary"
          variant="outlined"
          style={{
            margin: '0 0 10px',
          }}
        />
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          onClick={formik.onSubmit}
        >
          Submit
        </Button>

        <p>{error}</p>
      </form>
      <ButtonGroup
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        aria-label="outlined primary button group"
      >
        <GoogleButton />
        <FacebookButton />
      </ButtonGroup>
    </Box>
  );
}

export default EmployerRegister;