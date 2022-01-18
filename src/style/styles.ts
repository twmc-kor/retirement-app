import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 360px;
    margin: 0 auto;
    padding: 0;
  }

`;

export default GlobalStyle;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

// @font-face {
//   font-family: 'ONE-Mobile-POP';
//   src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;
// }
