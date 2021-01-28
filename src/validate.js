import * as yup from 'yup';

const loginSchema = yup.object().shape({
  nickname: yup.string()
    .email('Введите действительный адрес электронной почты.')
    .required('Введите адрес электронной почты.'),
  password: yup.string()
    .matches(/^[a-zA-Z]+$/, 'Пароль должен содержать только буквы латинского алфавита.')
    .required('Введите пароль.')
    .min(8, 'Минимальная длинна пароля 8 символов.')
    .max(16, 'Максимальная длинна пароля 16 символов.'),
});

export default loginSchema;
