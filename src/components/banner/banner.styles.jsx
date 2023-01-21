import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;

  position: relative;
  overflow: hidden;
  h1 {
    z-index: 2;
    position: absolute;
    color: white;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  div{
    z-index: 0;
    position: absolute;
    background-color: #365314;
    height: 100%;
    width: 100%;
  }
`;

export const SlideshowImage = styled.img`
  z-index: 1;
  position: absolute;
  filter: brightness(50%);
  width: 100%;
  object-fit: fill;
`;
