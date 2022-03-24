import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #fdf2f5;
  --red: #e53e4d;
  --blue: #5429cc;
  
  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --shape: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* 
* - font-size: 16px (Desktop)
* - Diminuir a font fica melhor p/ se trabalhar com medidas 
* em (REM) e em dispositivos menores.
* - REM = 1REM = e igual ao tamanho do font-size da nossa pagina.  
*/

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 16px * 0.9375 = 15px
  }

  @media (min-width: 720px) {
    font-size: 87.5%; // 16px * 0.875 = 14px
  }
}

body {
  background: var(--background);
  --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`