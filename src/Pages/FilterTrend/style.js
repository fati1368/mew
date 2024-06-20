import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;
    span {
      color: ${palette.fontColorSection};
    }
  }
  .title {
    p {
      font-size: 13rem;
      font-weight: 900;
    }
    .secondary-vocab {
      color: ${palette.fontColorSection};
    }
    text-transform: uppercase;
  }
  .list {
    flex-direction: column;
    align-items: center;
  }
  .ant-radio-button-wrapper {
    span{
      padding:2em;
    }
  
  }
  .ant-radio-button-wrapper-checked {
    background-color: ${palette.primaryColor};
    color: ${palette.thirdColor};
    border-color: ${palette.thirdColor} !important;
  }
`;
export default Style;
