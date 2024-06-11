import styled from "styled-components";
import { palette } from "../../Style/Theme";

const Style = styled.div`
.hero-container {
  mask-image: linear-gradient(to left, black, transparent 65%);
  height: 100vh;
  width:100vw;
  overflow: hidden;
  .hero-video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
  .title{
  color:${palette.fontColorSection};}
}
.hero-text {
  top:20%;
  left:5%;
  transform:translate X Y (-50%,-50%);
  z-index:-1;
  p {
    font-size: 2rem;
  }
`;
export default Style;
