import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  
  body {

    background: #393939;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;