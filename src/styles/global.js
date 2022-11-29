import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  span,
  li,
  button,
  input {
    font-family: "Inter", sans-serif;
  }
  


:root {
  --color-primary: #FF577F;
  --color-primary-50: #FF427F;
  --color-secondary: #59323F;

  --grey-0: #F8F9FA;
  --grey-1: #868E96;
  --grey-2: #343B41;
  --grey-3: #212529;
  --grey-4: #121214;

  --sucess: #3FE864;
  --negative: #E83F5B;
  
  --font-size-1: 1rem; /* 16px */
  --font-size-2: 0.75rem; /* 12px */

  --font-weight-1: 700;
  --font-weight-2: 400;
}
`;
