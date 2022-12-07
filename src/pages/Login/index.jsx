import React from "react";
import Form from "./../../components/Form";
import { Container } from "../../styles/Container";
import logo from "./../../assets/Logo.svg";
import { StyledLogin } from "./style";
import ComponentLink from "../../components/Link";

export const Login = () => {
  return (
    <Container>
      <StyledLogin>
        <img src={logo} alt="Kenzie Hub logo" />
        <div>
          <h2>Login</h2>
          <Form />
          <span>Ainda não possui uma conta?</span>
          <ComponentLink
            to="/register"
            stylelink="grey-solid"
            value="Cadastre-se"
          />
        </div>
      </StyledLogin>
    </Container>
  );
};
