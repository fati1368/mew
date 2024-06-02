import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
  .searchInput {
    &:hover input {
      visibility: visible;
      display: block;
      opacity: 1;
    }
    &:hover .iconSearch {
      right: -200px;
      bottom: 0;
    }
    &.active input {
      visibility: visible;
      display: block;
      opacity: 1;
    }
    &.active .iconSearch{
      right: -200px;
      bottom: 0;
    }
    .iconSearch {
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 20px;
      cursor: pointer;
      z-index: 1;
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
    width: 100%;
    z-index: 1;
    max-height: 250px;
    background-color: ${palette.secondaryColor};
    padding: 1em;
    line-height: 2;
    border-radius: 10px;
    overflow-y: auto; 
    p {
      color: ${palette.primaryColor};
    }
  }
`;
export default Style;
