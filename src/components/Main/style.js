import styled from "styled-components";

export const StyledMain = styled.main`
  min-height: 100vh;
  height: 100%;
  h3 {
    text-transform: capitalize;
    font-size: var(--font-size-3);
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
  }

  div > div > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 21px;
    width: 100%;
    background: var(--grey-3);
    border-radius: 4px;
    padding: 22px 19px;
  }
`;
