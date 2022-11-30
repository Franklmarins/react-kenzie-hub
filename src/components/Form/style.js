import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    gap: 22px;

    font-size: var(--font-size-3);
    color: var(--grey-0);
    font-weight: var(--font-weight-2);
  }
`;

export default StyledForm;
