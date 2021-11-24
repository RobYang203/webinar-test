import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
  id: yup.string().required('please select Topic'),
  firstName: yup.string().trim().required('please enter fist name'),
  lastName: yup.string().required('please enter last name'),
  email: yup.string().required('please enter email name').email('email error'),
});
