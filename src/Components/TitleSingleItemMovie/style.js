import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  .section-space {
    padding-top: 7rem;
  }
  .sectionTitle {
    text-align: center;
    line-height: 1.5;
    text-transform: lowercase;
    .cost {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.3) 100%
      );
      box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.4);
      border-radius: 20px;

      color: #111;
      padding: 1em 2em;
      width: 70%;
      margin: 0 auto;
    }
    .company {
      gap: 10px;
    }
    .countries {
      max-width: 500px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .country {
        font-size: 1.5rem;
      }
    }
    h2 {
      font-size: 4.3em;
      text-transform: uppercase;
    }
    h3 {
      font-size: 2em;
      text-transform: uppercase;
    }
    h4 {
      text-transform: uppercase;
    }
    p,
    .p {
      font-size: 2rem;
    }
    img {
      width: 50px;
    }
  }

  // .bg{
  //     &::before{
  //         content:"";
  //         background-color: rgba(0, 0, 0, 0.9);
  //         position: absolute;
  //         top: 0;
  //         left: 0;
  //         width: 100%;
  //         height: 100%;
  //         z-index:0;
  //     }
  //     background:url(./assets/Image/trend.jpg) ;
  //  .title{
  //      position: relative;
  //      display: inline-block;
  //    width: 100%;
  //     vertical-align: top;
  //      text-align: left;
  //    padding: 0 30px;
  // }
  //     }
`;
export default Style;
