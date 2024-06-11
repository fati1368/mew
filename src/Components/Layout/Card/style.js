import styled from "styled-components";
import { palette } from "../../../Style/Theme";
const Style = styled.div`
  .col {
    width: calc(25% - 2rem);
    margin: 1rem;
    cursor: pointer;
  }
  .containerCard {
    transform-style: preserve-3d;
    perspective: 1000px;
    width: 200px;
    &:hover .front,
    &:hover .back {
      transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }
    &:hover .back {
      transform: rotateY(0deg);
      transform-style: preserve-3d;
    }
    &:hover .front {
      transform: rotateY(-180deg);
      transform-style: preserve-3d;
    }
    .front,
    .back {
      background-size: cover;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
      background-position: center;
      backface-visibility: hidden;
      transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
      text-align: center;
      box-shadow: 0 0 10px solid blue;
      font-size: 1.5rem;
      height: auto;
      border-radius: 10px;
      color: #fff;
    }
    .front {
      transform: rotateY(0deg);
      transform-style: preserve-3d;
      min-height: 280px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: "";
        border-radius: 10px;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 0,
          rgba(0, 0, 0, 0.5) 20%,
          rgba(131, 58, 180, 0) 100%
        );
        backface-visibility: hidden;
      }
      .inner {
        bottom: 0;
        p {
          font-size: 2rem;
          position: relative;
          padding: 0 0.6em;
          transition: 0.3s cubic-bezier(0.26, 0.26, 0, 0.96);
          font-weight: 400;
          text-transform: uppercase;
          line-height: 28px;
          letter-spacing: 0.08em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .back {
      transform: rotateY(180deg);
      transform-style: preserve-3d;
      background: url(./assets/Image/bgcard.png) #494545;
      background-size: contain;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 280px;
      .inner {
        top:50%;
        .info {
            padding: 0 2.3em;
            line-height:1.5;
            .title{
                text-align:left;
                color:${palette.thirdColor};
                }
                h4{
                font-size:1.5rem;
                }
        }
      }
    }
    .inner {
      transform: translateY(-50%) translateZ(60px) scale(0.94);
      position: absolute;
      width: 100%;
      left: 0;
      outline: 1px solid transparent;
      perspective: inherit;
      z-index: 2;
    }
  }


 
`;
export default Style;
