import styled from "styled-components";
import { palette } from "../../Style/Theme";
const Style = styled.footer`
  .footer {
    padding: 8em 2em 4em 2em;
    align-item: start;
    img {
      width: 400px;
    }
    p {
      font-size: 1.7rem;
      line-height: 2;
    }
    h4 {
      font-size: 1.7rem;
      color: ${palette.fontColorSection};
    }
   
    .Contact {
      margin-left: 4em;
      .basic {
        text-align: right;
      }
    }
    .menu {
      gap: 6em;
      margin-left: 6em;
      align-item: start;
    }
    .line {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 4em;
      width: 50%;
      margin: 0 auto;
    }
    .socialMedia {
      text-align: center;
      font-size: 1.7rem;
      line-height: 4;
    }
  }
  @media (max-width: 1150px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 950px) {
    img {
      width: 400px;
    }
    .menu {
      order: 1;
      margin-top: 4em;
    }
    .content-menu {
      display: block;
    }
    @media (max-width: 700px) {
      .content-logo {
        justify-content: center;
      }
      img {
        width: 300px;
        margin-bottom: 3em;
      }
    }
    @media (max-width: 400px) {
      img {
        width: 200px;
      }
    }
  }
`;
export default Style;
