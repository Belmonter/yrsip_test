import { createGlobalStyle } from 'styled-components';

import { rem } from './Theme';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    // outline: none;
  }

  a:focus,
  a:active {
    // outline: none;
  }

  html,
  body {
    height: 100%;
    min-width: ${() => rem(200)};;;
  }

  body {
    color: #092326;
    background-color: #F0F5F5;
    line-height: 1;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize};
    //text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  textarea {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: inherit;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  hr {
    height: 1px;
    background-color: #CDD2DD;
  }
`;
