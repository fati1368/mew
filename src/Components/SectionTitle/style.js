import styled from "styled-components";
import { palette, type } from "../../Style/Theme";
const Style = styled.div`
.section-space {
  padding-top: 15rem  ;
}  
.sectionTitle {
    text-align: center;
    line-height: 1.5;
    text-transform: lowercase;
    h2 {
      font-size: 8em;
      text-transform: uppercase;
    }
  }

  // .bg{
  //     &::before{
  //         content:"";
  //         background-color: rgba(0, 0, 0, 0.9);
  //         position: absolute;
  //         top: 0;
  //         left: 0;
  //         width: 100%;
  //         height: 100%;
  //         z-index:0;
  //     }
  //     background:url(./assets/Image/trend.jpg) ;
  //  .title{
  //      position: relative;
  //      display: inline-block;
  //    width: 100%;
  //     vertical-align: top;
  //      text-align: left;
  //    padding: 0 30px;
  // }
  //     }
`;
export default Style;
