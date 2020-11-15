import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
/* UI */
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormField from '../Form/FormField/FormField';
import ErrorMessage from '../Form/ErrorMessage/ErrorMessage';
/* Authentication */
import { useAuth } from '../../services/authentication';
import { USER_ROLES } from '../../constants/user.constants';
/* validation */
import validateRegisterForm from '../../Utils/validate.helper';

function EmployerRegister({ value, index }) {
  const { signup } = useAuth();
  const history = useHistory();

  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validateRegisterForm,
    onSubmit: ({ email, password }) => {
      signup(email, password, USER_ROLES.employer)
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
    <Box
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '600px',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '300px',
        }}
        autoComplete="off"
      >
        <FormField
          type="email"
          name="email"
          error={emailCheck}
          value={formik.values.email}
          label={emailCheck ? formik.errors.email : 'email'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormField
          name="password"
          type="password"
          error={passwordCHeck}
          value={formik.values.password}
          label={passwordCHeck ? formik.errors.password : 'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormField
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
        />

        <Button
          type="submit"
          style={{
            margin: ' 16px 0',
          }}
          color="primary"
          variant="outlined"
        >
          Submit
        </Button>

        <ErrorMessage message={error} />
      </form>
    </Box>
  );
}

export default EmployerRegister;
