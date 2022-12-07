import styled from "styled-components";

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px 20px 32px 20px;
  gap: 22px;
  width: 100%;

  label {
    font-size: var(--font-size-3);
    color: var(--grey-0);
    font-weight: var(--font-weight-1);
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 22px;

    button:nth-child(1) {
      width: 100%;
    }
  }
`;
