import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
