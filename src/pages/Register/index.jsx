import React from "react";
import logo from "./../../assets/Logo.svg";
import Form from "./../../components/Form";
import { Container } from "../../styles/Container";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="Kenzie Hub logo" />
          <Link to="/login">Voltar</Link>
          <div>
            <h2>Crie sua conta</h2>
            <span>Rápido e grátis, vamos nessa!</span>
            <Form />
          </div>
        </div>
      </Container>
    </>
  );
};
