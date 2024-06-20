import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
.input{
justify-content:center;
}
    input {
      font-family: ${type.mainFont};
      width: 50%;
      height: 40px;
      font-size: 1.5rem;
      padding: 1em;
      border-radius: 10px;
      transition: all 0.5s;
      
    }
      h1{
      text-align:center;
      }
  .button{
  justify-content:center;

  }
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
  .button {
    .list {
      span {
        padding: 2em;
      }
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

   
  
  
`;
export default Style;
