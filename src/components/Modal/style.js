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
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    position: relative;
    width: auto;
    height: auto;
    border-radius: 4px;
  }
  > div > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 370px;
    padding: 12px 20px;
    background: var(--grey-2);
    border-radius: 4px 4px 0 0;

    > h3 {
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-1);
      color: var(--grey-0);
    }
    > button {
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-2);
      color: var(--grey-1);
    }
  }
`;
