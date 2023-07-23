import * as Yup from 'yup'

export const ValidationForm = Yup.object({
  name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().min(5).required('Required')
})