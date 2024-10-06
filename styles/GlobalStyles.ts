import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  ol {
    list-style: none ;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    background-color: unset;
  }
`;

export default GlobalStyle;
