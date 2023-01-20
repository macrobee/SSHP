import styled from "styled-components";

export const NavBarDiv = styled.div`
  position: fixed;
  width: min(300px, 27%);
  height: 100%;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.themeColors.noColor};
  z-index: 4;
  box-sizing: border-box;
  img {
    height: 175px;
    width: 175px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    font-weight: 500;
    :hover {
      transform: scale(1.05);
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.themeColors.main};
    transition: 0.3s;
    :hover {
      color: ${(props) => props.themeColors.secondary};
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    height: max(5%, 75px);
    bottom: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left: none;
    padding: 1rem 5%;

    border-top: 2px solid ${(props) => props.themeColors.text | "black"};
    background-color: ${(props) => props.themeColors.background | "white"};

    img {
      height: 50px;
      width: 50px;
    }
    ul {
      display: none;
    }
  }
`;
