import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
/* UI */
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormField from '../FormElements/FormField/FormField';
import ErrorMessage from '../FormElements/ErrorMessage/ErrorMessage';
/* Authentication */
import { useAuth } from '../../services/authentication';
import { USER_ROLES } from '../../constants/user.constants';
/* validation */
import validateRegisterForm from '../../Utils/validate.helper';
import FormContainer from '../FormElements/FormContainer/FormContainer';

import styles from './EmployerRegister.module.css';

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
    <FormContainer>
      <form
        onSubmit={formik.handleSubmit}
        className={styles.form}
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
            padding: '0.8rem',
          }}
          color="primary"
          variant="contained"
          onClick={formik.handleSubmit}
        >
          Submit
        </Button>

        <ErrorMessage message={error} />
      </form>
    </FormContainer>
  );
}

export default EmployerRegister;
