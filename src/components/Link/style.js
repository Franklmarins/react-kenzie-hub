import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  padding: 0 22px;

  border-radius: 4px;

  color: var(--grey-0);

  font-size: var(--font-size-2);

  ${({ stylelink }) => {
    switch (stylelink) {
      case "primary-solid":
        return css`
          background: var(--color-primary);
          &:hover {
            background: var(--color-primary-50);
          }
          &:disabled {
            background: var(--color-secondary);
          }
        `;
      case "grey-solid":
        return css`
          background: var(--grey-1);
          &:hover {
            background: var(--grey-2);
          }
        `;
      case "grey-2-solid":
        return css`
          background: var(--grey-3);
          &:hover {
            background: var(--grey-2);
          }
        `;
      case "medium-solid":
        return css`
          height: 32px;
          padding: 0 16px;
          background: var(--grey-3);
          font-size: var(--font-size-3);
          &:hover {
            background: var(--grey-2);
          }
        `;

      case "plus":
        return css`
          width: 32px;
          height: 32px;
          background: var(--grey-3);
          &:hover {
            background: var(--grey-2);
          }
        `;
    }
  }}
`;
