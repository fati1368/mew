import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
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
      min-height: 280px;
      box-shadow: 0 0 10px solid blue;
      font-size: 1.5rem;
      height: auto;
      border-radius: 10px;
      color: #fff;
    }
    .front {
      transform: rotateY(0deg);
      transform-style: preserve-3d;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        content: "";
        border-radius: 10px;
        display: block;
        opacity: 0.6;
        background-color: #000;
        backface-visibility: hidden;
      }
      .inner p {
        font-size: 2rem;
        position: relative;
        margin: 31px 0 0;
        margin-top: -0.5em;
        transition: 0.3s cubic-bezier(0.26, 0.26, 0, 0.96);
        font-weight: 400;
        text-transform: uppercase;
        line-height: 28px;
        letter-spacing: 0.08em;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .back {
      transform: rotateY(180deg);
      transform-style: preserve-3d;
      background: #cedce7;
      background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .inner {
      transform: translateY(-50%) translateZ(60px) scale(0.94);
      bottom: 0;
      position: absolute;
      left: 0;
      width: 100%;
      outline: 1px solid transparent;
      perspective: inherit;
      z-index: 2;
    }
  }

  @media screen and (max-width: 64rem) {
    .col {
      width: calc(33.333333% - 2rem);
    }
  }
  @media screen and (max-width: 48rem) {
    .col {
      width: calc(50% - 2rem);
    }
  }

  @media screen and (max-width: 32rem) {
    .col {
      width: 100%;
      margin: 0 0 2rem 0;
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
  //     .title{
  //         position: relative;
  //         display: inline-block;
  //         width: 100%;
  //         vertical-align: top;
  //         text-align: left;
  //         padding: 0 30px;
  //     }
  //     }


`;
export default Style;
