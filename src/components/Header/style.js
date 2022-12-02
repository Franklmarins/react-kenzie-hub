import styled from "styled-components";

export const StyledHeader = styled.header`
  border-bottom: 1px solid var(--grey-2);

  h1 {
    text-transform: capitalize;
    font-size: var(--font-size-1);
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
  }

  span {
    font-size: var(--font-size-3);
    color: var(--grey-1);
    font-weight: var(--font-weight-2);
  }
  div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 25px 0;
  }

  @media (max-width: 350px) {
    div > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;
