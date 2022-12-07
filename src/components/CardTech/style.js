import styled from "styled-components";

export const StyledCardTech = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--grey-4);
  border-radius: 4px;
  cursor: pointer;

  h2 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-1);
    color: var(--grey-0);
  }
  span {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-2);
    color: var(--grey-1);
  }
  &:hover {
    background: var(--grey-2);
  }
`;
