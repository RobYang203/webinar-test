import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string().required('please enter email name').email('email error'),
  password: yup.string().required('please enter password'),
});
