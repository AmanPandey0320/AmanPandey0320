import styled from "styled-components";
import constants from "../../../assets/constant";

export const NavMenuWrapper = styled.div`
  /* Extra small devices (phones, 600px and down) */
  position: fixed;
  z-index: 9;
  @media only screen and (max-width: 600px) {
    display: block;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    display: none;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    display: none;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: none;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

/**
 *
 */
export const HamBurgerWrapper = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 19;
  &:hover {
    cursor: pointer;
  }
  &.open {
    & div {
      width: 32px;
      height: 4px;
      border-radius: 2px;
      background-color: white;
      margin-bottom: 5px;
      margin-right: 8px;
      position: relative;
      z-index: 9;
      // transform-origin: 4px 0px;
      transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      &:nth-child(1) {
        transform: rotate(45deg) translate(13px, 0px);
      }
      &:nth-child(2) {
        width: 18px;
        opacity: 0;
        transform: scale(0);
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(13px, 0px);
      }
    }
  }
  &.close {
    & div {
      height: 4px;
      border-radius: 2px;
      background-color: white;
      margin-bottom: 5px;
      position: relative;
      z-index: 9;
      transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      &:nth-child(1) {
        width: 32px;
        transform-origin: 0% 0%;
      }
      &:nth-child(2) {
        width: 18px;
        opacity: 1;
        transform: scale(1);
        transform-origin: 0% 100%;
      }
      &:nth-child(3) {
        width: 24px;
      }
    }
  }
`;

export const MenuNav = styled.nav`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  & > div {
    color: white;
  }

  /* opening and closing the nav */
  &.open {
    z-index: 9;
    opacity: 1;
    transform: translate(0px, 0px) scale(1);
    transition: opacity 0.5s ease-out, transform 0.5s;
  }
  &.close {
    opacity: 0;
    display: none;
    transform: translate(-600px, 0px) scale(0);
    transition: opacity 0.5s ease-out, transform 0.5s;
  }
`;

export const MenuToolBar = styled.ul`
  margin: 0 auto 0;
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 12px;
  margin-bottom: 4px;
  width: 200px;
  text-align: center;
  font-size: 17px;
  color: ${constants.color.foreground};
  font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,
    "Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  &:hover{
    color: ${constants.color.text};
  }
  }
`;
