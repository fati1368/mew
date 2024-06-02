import { createGlobalStyle } from "styled-components";
import { palette, type } from "./Theme";
import "./font.css";
const GlobalStyle = createGlobalStyle`
* , *::before , *::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: ${palette.fontColor};
  }
  ul,
  li {
    list-style: none;
  }
  
  html {
    font-size: 10px;
  }
  body {
    direction: ltr;
    background-color: ${palette.primaryColor};
    font-family:${type.mainFont};
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .flex{
    display: flex;
  }
  .space-between{
    justify-content: space-between;
  }
  .align-center{
    align-items: center;
  }
  .relative{
    position: relative;
  }
  .absolute{
    position: absolute;
  }
  h1{
    font-size:5rem;
  }
  h2{
    font-size:4rem;
  }
  h3{
    font-size:3rem;
  }
  h4{
    font-size:2rem;
  }
  h5{
    font-size:1rem;
  }
  p{
    font-size:1.3rem;
  }
  `;
export default GlobalStyle;
