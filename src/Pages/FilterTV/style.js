import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 4.5rem;
    height-line:1;

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
      }
      .ant-radio-button-wrapper {
   background-color: ${palette.primaryColor};
      color: ${palette.thirdColor} ;

       &:hover {
       background-color: ${palette.thirdColor};
      color: ${palette.fontColor};
    }
    
    
  }
`;
export default Style;
