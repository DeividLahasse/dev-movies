import styled from "styled-components";



export const Container = styled.div`
min-height: 100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  margin-right: 68px;
  background-color: ${(props) =>
    props.changeBackground ? "#000" : "transparent"};
    width: 100%;
    transition:background-color 1s ease-in-out ;

  img {
    width: 25%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 40px;
  list-style-type: none;
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: "";
    height: 1px;
    width: ${(props) => (props.isActive ? "100%" : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translatex(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
