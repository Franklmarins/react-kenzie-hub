import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import StyledForm from "./style";
import { formSchemaRegister, formSchemaLogin } from "./formSchema";
import InputEmail from "./Email";
import InputPassword from "./Password";
import InputName from "./Name";
import InputPassConfirmation from "./PasswordConfirmation";
import InputBio from "./Bio";
import InputContact from "./Contact";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import Button from "../Button";
import SelectModule from "./Module";

const Form = () => {
  const local = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(
    local.pathname === "/login"
      ? {
          resolver: yupResolver(formSchemaLogin),
        }
      : {
          resolver: yupResolver(formSchemaRegister),
        }
  );

  const submit = (data) => {
    if (local.pathname === "/login") {
      toast.promise(
        api.post("/sessions", data).then(function (response) {
          return response.data;
        }),
        {
          pending: {
            render() {
              return "Logando...";
            },
          },
          success: {
            render({ data }) {
              localStorage.clear();
              localStorage.setItem("token", data.token);
              localStorage.setItem("userID", data.user.id);
              reset();
              navigate("/dashboard");
              return `Olá ${data.user.name}, seja bem-vindo! 👌`;
            },
          },
          error: {
            render() {
              return "Email e/ou senha inválidos! 🤯";
            },
          },
        }
      );
    } else {
      toast.promise(
        api.post("users", data).then(function (response) {
          return response.data;
        }),
        {
          pending: {
            render() {
              return "Cadastrando...";
            },
          },
          success: {
            render() {
              navigate("/login");
              return "Cadastro realizado com sucesso!";
            },
          },
          error: {
            render() {
              return "E-mail já existe";
            },
          },
        }
      );
    }
  };

  if (local.pathname === "/login")
    return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <InputEmail errors={errors} register={register} />
        <InputPassword errors={errors} register={register} />
        <Button type="submit" buttonStyle="primary-solid" name="Entrar" />
      </StyledForm>
    );

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <InputName errors={errors} register={register} />
      <InputEmail errors={errors} register={register} />
      <InputPassword errors={errors} register={register} />
      <InputPassConfirmation errors={errors} register={register} />
      <InputBio errors={errors} register={register} />
      <InputContact errors={errors} register={register} />
      <SelectModule errors={errors} register={register} />
      <Button type="submit" buttonStyle="primary-solid" name="Enviar" />
    </StyledForm>
  );
};

export default Form;
