import styled from "styled-components";
const Style = styled.div`
  img {
    width: 70px;
  }
  .fixed {
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .fixed.scrolled {
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    // border: 2px solid rgba(255, 255, 255, 0.18);
        mask-image: linear-gradient(to right, black, transparent 70%);
  }
        .menu.hide{
        display:none;
        }
`;
export default Style;
