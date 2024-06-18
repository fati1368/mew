import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  .section-space {
    padding-top: 15rem;
  }
  .sectionTitle {
    text-align: center;
    line-height: 1.5;
    text-transform: lowercase;
    h2 {
      font-size: 9rem;
      text-transform: uppercase;
      text-align: center;
    }
  }
  .ant-radio-button-wrapper {
    background-color: ${palette.thirdColor};
    &:hover {
      color: ${palette.fontColor};
    }
  }
  .ant-radio-button-wrapper-checked {
    background-color: ${palette.primaryColor};
    color: ${palette.thirdColor};
    border-color: ${palette.thirdColor} !important;
  }

  @media (max-width: 600px) {
    .sectionTitle {
      h2 {
        font-size: 5rem;
      }
      h4 {
        font-size: 1.5rem;
      }
    }
  }
`;
export default Style;
