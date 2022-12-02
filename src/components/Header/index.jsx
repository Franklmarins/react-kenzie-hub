import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "../../styles/Container";
import { StyledHeader } from "./style";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [courseModule, setCourseModule] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    api
      .get("profile", { headers: { Authorization: `Bearer ${token}` } })
      .then(function (response) {
        setUserName(response.data.name);
        setCourseModule(response.data.course_module);
      });
  }, []);

  return (
    <StyledHeader>
      <Container>
        <div>
          <h1>Olá, {userName}</h1>
          <span>{courseModule}</span>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
