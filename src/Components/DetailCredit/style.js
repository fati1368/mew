import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  .hero-image {
    position: relative;
    height: 100vh;
    border-bottom: 1px solid;
    box-shadow: 0px 0px 30px rgba(277, 277, 277, 0.3);
    background-position: left top;
    background-size: cover;
    background-repeat: no-repeat;
    .transparent {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .hero-container {
      position: relative;
      z-index: 2;
      .poster-information {
        height: 100vh;
        align-items: center;
        .poster {
          img {
            // width: auto;
            // height: 450px;
            position: relative;
            border-radius: 10px;
          }
          .social {
            text-align: center;
            margin-top: 0.5em;
          }
        }
        .information {
          flex-direction: column;
          margin-left: 2em;
          justify-content: space-between;
          height: 500px;
          .title-subtitle {
            .sub-title {
              gap: 3em;
              font-size: 1.5rem;
              align-content: flex-start;
            }
              .overview-tagline{
              width:100%;
                .overview {
                  padding: 1em ;
                  backdrop-filter: blur(3px);
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  border-radius: 10px;
                  font-siz: 2rem;
                  line-height: 1.5;
                  }
            }
          }
        }
      }
    }
    h1 {
      font-size: 6rem;
      margin: 0;
    }
    .gap {
      gap: 5em;
      padding: 0 10em;
      font-size: 1.5rem;
      .title {
        color: ${palette.fontColorSection};
      }
      font-weight: 700;
    }
  }
`;
export default Style;
