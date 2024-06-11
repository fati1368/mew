import styled from "styled-components";
import { palette } from "../../Style/Theme";

const Style = styled.div`
  .credit {
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding:1em;

    .title-name {
      align-item:center;
    }

    p {
      color: ${palette.fontColorSection};
    }
    span {
      color: ${palette.fontColor};
    }
      h3{
            text-align:center;
            

      }
  }
`;
export default Style;
