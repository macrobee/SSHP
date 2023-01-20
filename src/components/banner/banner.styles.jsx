import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  h1 {
    z-index: 2;
    position: absolute;
    color: white;
  }
  img {
    z-index: 1;
    position: absolute;
    filter: brightness(50%);
    height: 100%;
  }
`;
