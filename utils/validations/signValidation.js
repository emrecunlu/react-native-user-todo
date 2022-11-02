import * as yup from 'yup'

export const signUpValidationSchema = yup.object().shape({
    name: yup
    .string()
    .required('Lütfen isminizi giriniz.')
    .min(3, 'İsminiz 3 karakterden daha az olamaz.')
    .max(25, 'İsmniz 25 karakterden daha fazla olamaz.'),
    email: yup
    .string()
    .required('Lütfen email adresinizi giriniz.')
    .email('Lütfen geçerli bir email adresi giriniz.'),
    password: yup
    .string()
    .required('Lütfen şifreinizi giriniz.')
    .min(3, 'Şifreniz 3 karakterden daha az olamaz.')
    .max(25, 'Şifreniz 25 karakterden daha fazla olamaz.')
})

export const signInValidationSchema = yup.object().shape({
    email: yup
    .string()
    .required('Lütfen email adresinizi giriniz.'),
    password: yup
    .string()
    .required('Lütfen şifreinizi giriniz.')
})