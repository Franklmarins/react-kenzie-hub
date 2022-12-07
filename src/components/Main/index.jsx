import React from "react";
import { StyledMain } from "./style";
import { Container } from "../../styles/Container";
import { StyledButton } from "../Button/style";
import Modal from "./../Modal";

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <div>
          <div>
            <h3>Tecnologia</h3>
            <StyledButton buttonStyle="plus">+</StyledButton>
          </div>
          <Modal />
        </div>
      </Container>
    </StyledMain>
  );
};

export default Main;
