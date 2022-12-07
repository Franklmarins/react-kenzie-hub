import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container } from "../../styles/Container";
import { StyledHeader } from "./style";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <Container>
        <div>
          <h1>Olá, {user.name} </h1>
          <span>{user.course_module}</span>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
