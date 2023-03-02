import styled, {keyframes} from 'styled-components';

const fadeInAnimation = keyframes`
  0% { opacity: 0.5; }
  100% { opacity: 0.1; }`;

export const BackgroundImage = styled.div`
  background-image: url("${props=> props.url}");
  background-position: 50%, 0%;
  background-repeat:norepeat;
  background-size: cover;
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 10vh;
  
  ::before{
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    background-color:#365314;
    opacity: 0.2;
    z-index:0;
    animation-delay: 2s;
    animation: ${fadeInAnimation} 1s linear;
  }
`;