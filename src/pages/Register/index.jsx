import React from "react";
import logo from "./../../assets/Logo.svg";
import Form from "./../../components/Form";
import { Container } from "../../styles/Container";
import { StyledRegister } from "./style";
import { StyledLink } from "../../components/Link/style";
import { useNavigate } from "react-router-dom";
import ComponentLink from "../../components/Link";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <StyledRegister>
          <div>
            <img src={logo} alt="Kenzie Hub logo" />
            <ComponentLink
              to={navigate("/login")}
              stylelink="grey-2-solid"
              value="Voltar"
            />
          </div>
          <div>
            <h2>Crie sua conta</h2>
            <span>Rápido e grátis, vamos nessa!</span>
            <Form />
          </div>
        </StyledRegister>
      </Container>
    </>
  );
};
