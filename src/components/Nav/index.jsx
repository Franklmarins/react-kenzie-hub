import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container } from "../../styles/Container";
import Button from "../Button";
import { StyledButton } from "../Button/style";
import logo from "./../../assets/Logo.svg";
import { StyledNav } from "./style";

const Nav = () => {
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();

    toast.info("Deslogado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigate("/login");
  }

  return (
    <StyledNav>
      <Container>
        <div>
          <img src={logo} alt="kenzieHubLogo" />
          <Button
            onClick={logOut}
            type="button"
            buttonStyle="medium-solid"
            value="sair"
          />
        </div>
      </Container>
    </StyledNav>
  );
};

export default Nav;
