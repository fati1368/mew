import styled from "styled-components";
import "./styl.css";
import { palette } from "../../Style/Theme";
const Style = styled.div`
  .ant-dropdown-link {
    font-size: 1.8rem;
    padding: 0 1.5em;
  }
  .menu.scrolled {
    display: none;
    visible: hide;
    opacity: 0;
  }

  @media (max-width: 600px) {
    .menu {
      visible: hide;
      opacity: 0;
    }
  }
`;
export default Style;
