const validate = (values) => {
  const errors = {};
  if (values.email === '') {
    errors.email = 'required';
  }
  if (values.password === '') {
    errors.password = 'required';
  }
  if (values.passwordConfirm === '') {
    errors.passwordConfirm = 'required';
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "passwords doesn't match";
  }
  return errors;
};
export default validate;
