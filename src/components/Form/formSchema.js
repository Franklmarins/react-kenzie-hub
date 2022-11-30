import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Nome mínimo de 3 caracteres"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(/(?=.*[!@#$%^&*])/, "Deve conter pelo menos um caracter especial")
    .min(6, "Deve conter pelo menos 6 dígitos"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  course_module: yup.string().required("Escolha o período do seu curso"),
  bio: yup
    .string()
    .required("E-mail obrigatório")
    .min(15, "Minimo de 15 caracteres"),
  contact: yup
    .string()
    .required("Número do telefone")
    .matches(/(\(?\d{2}\)?\s)?(\d{8,9})/, "Número de telefone errado")
    .max(13, "Número de telefone passou de 11 números"),
});

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .matches(/(?=.*?[0-9])/, "Deve conter pelo menos um número")
    .matches(/(?=.*[!@#$%^&*])/, "Deve conter pelo menos um caracter especial")
    .min(8, "Deve conter pelo menos 8 dígitos"),
});
