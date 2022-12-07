import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  > div {
    padding: 32px 22px;
    background-color: var(--grey-4);
    position: relative;
    width: auto;
    height: auto;
    border-radius: 4px;
  }
`;
