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
    color:${palette.fontColor}
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
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
  .justify-center {
    justify-content: center;
  }
  .text-align-center {
    text-align: center;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .relative{
    position: relative;
  }
  .absolute{
    position: absolute;
  }
  h1{
    font-size:7rem;
    font-weight:900;
  }
  h2{
    font-size:4rem;
    font-weight:900;
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
  .col-1 {
    flex-basis: 8.33%;
  }
  .col-2 {
    flex-basis: 16.66%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 33.33%;
  }
  .col-5 {
    flex-basis: 41.66%;
  }
  .col-6 {
    flex-basis: 50%;
  }
  .col-7 {
    flex-basis: 58.33%;
  }
  .col-8 {
    flex-basis: 66.66%;
  }
  .col-9 {
    flex-basis: 75%;
  }
  .col-10 {
    flex-basis: 83.33%;
  }
  .col-11 {
    flex-basis: 91.66%;
  }
  .col-12 {
    flex-basis: 100%;
  }
  .pt-1 {
    padding-top: 5px;
  }
  .pt-2 {
    padding-top: 10px;
  }
  .pt-3 {
    padding-top: 15px;
  }
  .pt-4 {
    padding-top: 20px;
  }
  .pt-5 {
    padding-top: 25px;
  }
  .pb-1 {
    padding-bottom: 5px;
  }
  .pb-2 {
    padding-bottom: 10px;
  }
  .pb-3 {
    padding-bottom: 15px;
  }
  .pb-4 {
    padding-bottom: 20px;
  }
  .pb-5 {
    padding-bottom: 25px;
  }
  .mt-1 {
    margin-top: 5px;
  }
  .mt-2 {
    margin-top: 10px;
  }
  .mt-3 {
    margin-top: 15px;
  }
  .mt-4 {
    margin-top: 20px;
  }
  .mt-5 {
    margin-top: 25px;
  }
  .mb-2 {
    margin-bottom: 15px;
  }
  .mb-3 {
    margin-bottom: 25px;
  }
  [class^="col-"] {
    padding: 15px;
  }
    a{
    &:hover{
    color:${palette.fontColorSection}}}
     .shadow {
      margin-top: 15em;
      box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
      width: 100%;
      height: 1px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  *::-webkit-scrollbar {
      height: 10px;
  width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #DFE9EB;
}
    *::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}
  *::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #e7c252;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #e7c252;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #e7c252;
}
   .ant-pagination {
  .ant-pagination-item-active{
  background-color: ${palette.secondaryColor};
        color: ${palette.primaryColor};

  }
    .ant-pagination-item {
    &:hover{
    a{
      color: ${palette.primaryColor};
    }
    }
      background-color: ${palette.primaryColor};
      border-color: ${palette.thirdColor} !important;
      a {
        color: ${palette.thirdColor};
      }
    }
  }
   @media (max-width: 1200px) {
    .container {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
  }
   }

   @media (max-width: 600px) {
   h1{
   font-size:5rem;}
   
   h2{
   font-size:3rem;
}}
  `;
export default GlobalStyle;
