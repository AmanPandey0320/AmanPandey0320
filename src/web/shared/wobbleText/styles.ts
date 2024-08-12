import styled, { keyframes } from "styled-components";
import constants from "../../../assets/constant";
import { WobbleTextProps } from "./types";

const wobble = keyframes`
25% {
    transform: scale(0.8, 1.3);
  }
  50% {
    transform: scale(1.1, 0.8);
  }
  75% {
    transform: scale(0.7, 1.2);
  }
`;

export const WobbleWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const WobbleText = styled.div<WobbleTextProps>`
  color: #cac0b3;
  background-color: transparent;
  border: none;
  font-size: 70px;
  max-width: 72px;
  padding: 2px;
  opacity: 1;
  font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,"Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
  :hover {
    cursor: pointer;
    color: ${constants.color.textSec};
    animation: ${wobble} 0.6s;
  }

  @media only screen and (max-width: 600px) {
    font-size: 32px;
    max-width: 32px;
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

  &.small {
    font-size: 60px;
    max-width: 60px;
    @media only screen and (max-width: 600px) {
      font-size: 32px;
      max-width: 32px;
    }
  }
`;
