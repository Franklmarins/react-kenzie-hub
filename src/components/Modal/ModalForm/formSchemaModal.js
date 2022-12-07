import * as yup from "yup";

export const formSchemaModal = yup.object().shape({
  title: yup
    .string()
    .required("tecnologia obrigatória")
    .min(3, "Nome mínimo de 3 caracteres"),
  status: yup.string().required(),
});
