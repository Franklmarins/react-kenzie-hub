import React from "react";
import Form from "./../../components/Form";
import { Container } from "../../styles/Container";
import logo from "./../../assets/Logo.svg";
import { StyledLogin } from "./style";
import { StyledLink } from "../../components/Link/style";

export const Login = () => {
  return (
    <Container>
      <StyledLogin>
        <img src={logo} alt="Kenzie Hub logo" />
        <div>
          <h2>Login</h2>
          <Form />
          <span>Ainda não possui uma conta?</span>
          <StyledLink to="/register" stylelink="grey-solid">
            Cadastre-se
          </StyledLink>
        </div>
      </StyledLogin>
    </Container>
  );
};
