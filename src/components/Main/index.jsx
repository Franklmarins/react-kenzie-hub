import React from "react";
import { StyledMain } from "./style";
import { Container } from "../../styles/Container";
import { StyledButton } from "../Button/style";

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <div>
          <div>
            <h3>Tecnologia</h3>
            <StyledButton buttonStyle="plus">+</StyledButton>
          </div>
        </div>
      </Container>
    </StyledMain>
  );
};

export default Main;
