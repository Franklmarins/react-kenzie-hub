import React from "react";
import { StyledButton } from "./style";

const Button = ({ type, buttonStyle, value }) => {
  return (
    <StyledButton type={type} buttonStyle={buttonStyle}>
      {value}
    </StyledButton>
  );
};

export default Button;
