import styled from "styled-components";
import { palette } from "../../Style/Theme";
const Style = styled.div`
  img {
    width: 400px;
  }
  .footer {
    padding: 8em 2em 4em 2em;
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    align-item: start;
    p {
      font-size: 1.7rem;
      line-height: 2;
    }
    h4 {
      font-size: 1.7rem;
      color: ${palette.fontColorSection};
    }
      .Contact{
            margin-left:4em;
}
    .basic {
      text-align: right;
    }
    .menu {
      gap: 6em;
      margin-left: 6em;
      align-item: start;
    }
      .socialMedia{
          border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align:center;
      font-size:1.7rem;
      margin-top:4em;
      padding: 3em;
      line-height:4;
    
      }
  }
`;
export default Style;
