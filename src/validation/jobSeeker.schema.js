import * as Yup from 'yup';

const jobSeekerValidation = Yup.object({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  age: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  twitter: Yup.string().url(),
  facebook: Yup.string().url(),
  linkedIn: Yup.string().url(),
  headline: Yup.string(),
  summary: Yup.string(),
});

export default jobSeekerValidation;
/*  
      twitter: '',
      facebook: '',
      linkedIn: '',
      headline: '',
      summary: '', */
