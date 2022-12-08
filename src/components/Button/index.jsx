import React from "react";
import { StyledButton } from "./style";

const Button = ({ type, buttonStyle, name, onClick }) => {
  return (
    <StyledButton onClick={onClick} type={type} buttonStyle={buttonStyle}>
      {name}
    </StyledButton>
  );
};

export default Button;
