import styled, { createGlobalStyle } from "styled-components";

export const StyledAppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Inter", sans-serif;
    background: #0b0c0e;
    color: #fff;
  }

`;
