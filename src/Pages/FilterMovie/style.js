import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 5rem;

    span {
      color: ${palette.fontColorSection};
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

  .all-genre {
    .ant-space-item {
      border-color: ${palette.thirdColor} !important;
      label {
        min-width: 200px !important;
      }
      .ant-radio-button-wrapper-checked {
        background-color: ${palette.thirdColor};
        color: ${palette.primaryColor};
        border-color: ${palette.secondaryColor} !important;
      }
    }
    .ant-radio-button-wrapper {
      background-color: ${palette.primaryColor} !important;
      color: ${palette.thirdColor};
    }
  }
`;
export default Style;
