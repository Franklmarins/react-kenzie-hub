import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100vh;
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
`;
