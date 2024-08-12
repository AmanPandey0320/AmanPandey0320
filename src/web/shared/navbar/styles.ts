import styled from "styled-components";
import constants from "../../../assets/constant";

export const NavBar = styled("div")`
  background-color: ${constants.color.background};
  overflow: hidden;
  position: fixed;
  color: #ff4d00;
  top: 0;
  width: 100%;
  z-index:9999;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: none;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }

  &.up {
    visibility: hidden;
    transition: all 0.2s;
    transform: translateY(-100%);
  }
  &.down {
    visibility: visible;
    transition: all 0.2s;
  }
`;

/**
 *
 */
export const Toolbar = styled.ul`
  padding: 0;
  list-style: none;
  display: table;
  width: 600px;
  float: right;
`;

/**
 *
 */
export const Item = styled.li`
  margin-inline: 2px;
  display: table-cell;
  padding: 8px 0;
  &:hover {
    cursor: pointer;
  }
  & > a {
    font-size: 16px;
    color: ${constants.color.foreground};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,"Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    :hover{
      color: ${constants.color.hilight};
    }
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding: 8px 12px;
      font-size: 13px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding: 10px 15px;
      font-size: 14px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding: 12px 20px;
      font-size: 16px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      // min-height: 48px;
    }
  }
`;
