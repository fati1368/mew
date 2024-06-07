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
    align-items: start;
  }
  .fixed.blurMenu {
    //  background: linear-gradient(to left, rgba(17, 17, 17, 0), rgba(17, 17, 17, 1));
    mask-image: linear-gradient(to right, black, transparent 70%);
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .fixed.minHeight {
    min-height: 350px;
  }
`;
export default Style;
