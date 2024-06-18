import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  .searchInput {
    &:hover input {
      visibility: visible;
      display: block;
      opacity: 1;
    }
    &.active input {
      visibility: visible;
      display: flex;
      opacity: 1;
    }
    .iconSearch 
      cursor: pointer;
    }
    input {
      font-family: ${type.mainFont};
      width: 350px;
      height: 30px;
      font-size: 1.5rem;
      padding: 1em;
      border-radius: 10px;
      visibility: hidden;
      display: none;
      opacity: 0;
      transition: all 0.5s;
    }
  }
  .search-box {
    top: 100%;
    right: 0;
    width: 90%;
    z-index: 10;
    max-height: 250px;
    background-color: ${palette.secondaryColor};
    padding: 1em;
    line-height: 2;
    border-radius: 10px;
    overflow-y: auto;
    p {
      color: ${palette.primaryColor};
    }
      p:hover{
      background-color:${palette.thirdColor}}
  }
  
`;
export default Style;
