import React from "react";
import Form from "./../../components/Form";
import { Container } from "../../styles/Container";
import logo from "./../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { StyledLogin } from "./style";

export const Login = () => {
  return (
    <Container>
      <StyledLogin>
        <img src={logo} alt="Kenzie Hub logo" />
        <div>
          <h2>Login</h2>
          <Form />
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </StyledLogin>
    </Container>
  );
};
