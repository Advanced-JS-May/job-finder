import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAuth } from '../../services/authentication';
import { USER_ROLES } from '../../constants/user.constants';
import validate from '../../Utils/validate.helper';

/* UI */
import FormField from '../FormElements/FormField/FormField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SocialAccountLogin from '../SocialAccountLogin/SocialAccountLogin';
import ErrorMessage from '../FormElements/ErrorMessage/ErrorMessage';

function JobSeekerRegister({ value, index }) {
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
    <Box
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        maxWidth: '600px',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
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
          type="password"
          name="password"
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
          color="primary"
          variant="outlined"
          onClick={formik.onSubmit}
          style={{
            margin: ' 16px 0',
          }}
        >
          Submit
        </Button>

        <ErrorMessage message={error} />
      </form>
      <SocialAccountLogin />
    </Box>
  );
}

export default JobSeekerRegister;
