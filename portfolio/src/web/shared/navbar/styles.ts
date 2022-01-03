import styled from "styled-components";
import constants from "../../../assets/constant";

export const NavBar = styled("div")`
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: fixed;
  color: #ff4d00;
  top: 0;
  width: 100%;
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
  margin: 0 auto 0;
  padding: 0;
  list-style: none;
  display: table;
  width: 600px;
  text-align: center;
`;

/**
 *
 */
export const Item = styled.li`
  margin-inline: 2px;
  display: table-cell;
  position: relative;
  padding: 8px 0;
  &:hover {
    cursor: pointer;
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    position: absolute;
    background: ${constants.color.foreground};
    transition: transform 0.25s ease-out;
    width: 100%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  & > a {
    font-size: 16px;
    color: ${constants.color.foreground};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    font-family: "Patrick Hand", cursive;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    :hover{
      color: ${constants.color.text};
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
