import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  .button {
    align-items: center;
    flex-direction: column;
  }
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

  .ant-radio-button-wrapper-checked {
    background-color: ${palette.primaryColor};
    color: ${palette.thirdColor};
    border-color: ${palette.thirdColor} !important;
  }
 
`;
export default Style;
