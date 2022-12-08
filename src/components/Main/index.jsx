import React from "react";
import { StyledMain } from "./style";
import { Container } from "../../styles/Container";
import { StyledButton } from "../Button/style";
import { useContext } from "react";
import { TechContext } from "../../contexts/techContext";
import { UserContext } from "../../contexts/userContext";
import { StyledCardTech } from "../CardTech/style";

const Main = () => {
  const { addModal, setValue } = useContext(TechContext);
  const { user } = useContext(UserContext);

  return (
    <StyledMain>
      <Container>
        <div>
          <div>
            <h3>Tecnologia</h3>
            <StyledButton onClick={addModal} buttonStyle="plus">
              +
            </StyledButton>
          </div>

          {user.techs.length > 0 ? (
            <ul>
              {user.techs.map((tech) => (
                <StyledCardTech
                  onClick={(e) => {
                    setValue("title", tech.title);
                    setValue("status", tech.status);
                    localStorage.setItem("techId", tech.id);
                    return addModal(e);
                  }}
                  key={tech.id}
                >
                  <h2>{tech.title}</h2>
                  <span>{tech.status}</span>
                </StyledCardTech>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </StyledMain>
  );
};

export default Main;
