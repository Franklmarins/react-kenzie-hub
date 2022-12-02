import React from "react";
import { StyledLink } from "./style";

const ComponentLink = ({ to, stylelink, value }) => {
  return (
    <>
      <StyledLink to={to} stylelink={stylelink}>
        {value}
      </StyledLink>
    </>
  );
};

export default ComponentLink;
