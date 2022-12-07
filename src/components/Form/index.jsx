import React from "react";
import { useLocation } from "react-router-dom";
import StyledForm from "./style";
import InputEmail from "./Email";
import InputPassword from "./Password";
import InputName from "./Name";
import InputPassConfirmation from "./PasswordConfirmation";
import InputBio from "./Bio";
import InputContact from "./Contact";
import Button from "../Button";
import SelectModule from "./Module";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const Form = () => {
  const { submit, handleSubmit, local } = useContext(UserContext);

  if (local.pathname === "/login")
    return (
      <StyledForm onSubmit={handleSubmit(submit)}>
        <InputEmail />
        <InputPassword />
        <Button type="submit" buttonStyle="primary-solid" name="Entrar" />
      </StyledForm>
    );

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <InputName />
      <InputEmail />
      <InputPassword />
      <InputPassConfirmation />
      <InputBio />
      <InputContact />
      <SelectModule />
      <Button type="submit" buttonStyle="primary-solid" name="Enviar" />
    </StyledForm>
  );
};

export default Form;
