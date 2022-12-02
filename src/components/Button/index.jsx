import React from "react";
import { StyledButton } from "./style";

const Button = ({ type, buttonStyle, name, logOut }) => {
  return (
    <StyledButton onClick={logOut} type={type} buttonStyle={buttonStyle}>
      {name}
    </StyledButton>
  );
};

export default Button;
