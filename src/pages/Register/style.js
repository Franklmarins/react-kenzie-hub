import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 36px;
  margin-top: 48px;

  img {
    height: 20px;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 369px;

    a {
      width: auto;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 22px;
    padding: 42px 22px;

    width: 100%;
    max-width: 369px;

    background: var(--grey-3);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h2 {
      font-size: var(--font-size-1);
      color: var(--grey-0);
      font-weight: var(--font-weight-1);
    }
    span {
      font-size: var(--font-size-3);
      color: var(--grey-1);
      font-weight: var(--font-weight-2);
    }
  }
`;
