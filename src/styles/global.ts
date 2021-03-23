import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      // 15px
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      // 14px
      font-size: 87.5%;
    }
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  
  body {
    display: flex;
    justify-content: center;
    background: #393939;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;