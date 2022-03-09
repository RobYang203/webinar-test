import * as yup from 'yup';

export const signupFormSchema = yup.object().shape({
  name: yup.string().min(3).required('please enter user name'),
  email: yup.string().required('please enter email name').email('email error'),
  password: yup.string().min(6).required('please enter password'),
  passwordConfirm: yup
    .string()
    .test(
      'password confirm',
      'password confirm must match the password',
      (value, testContext) => {
        const { password } = testContext.parent;
        return value === password;
      }
    ),
});
