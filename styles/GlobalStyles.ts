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
`;

export default GlobalStyle;
