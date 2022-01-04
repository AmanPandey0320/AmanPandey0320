import styled, { keyframes } from "styled-components";
import constants from "../../../assets/constant";

export const CanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -99;
  background-color: ${constants.color.background};
  overflow: hidden;
`;

const spin = keyframes`
from{
  opacity:1;
  border-radius:0px;
  transform: scale(0) rotate(0deg);
}
to{
  opacity:0;
  border-radius:50%;
  transform: scale(2) rotate(960deg);
}
`;

export const Square = styled.div`
  position: absolute;
  // animation: ${spin} 10s ease-in forwards infinite;
  &:nth-child(1) {
    height: 200px;
    width: 200px;
    top: 4vh;
    left: 4vw;
    background-color: rgba(0, 0, 0, 0.2);
    animation: ${spin} 10s ease-in forwards infinite;
  }
  &:nth-child(2) {
    height: 100px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 8vh;
    left: 8vw;
    animation: ${spin} 13s ease-in forwards infinite;
  }
  &:nth-child(3) {
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 40vh;
    left: 25vw;
    animation: ${spin} 13s ease-in forwards infinite;
  }
  &:nth-child(4) {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 32vh;
    left: 32vw;
    animation: ${spin} 7s ease-in forwards infinite;
  }
  &:nth-child(5) {
    height: 100px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 40vh;
    left: 64vw;
    animation: ${spin} 7s ease-in forwards infinite;
  }
  &:nth-child(6) {
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 50vh;
    left: 50vw;
    animation: ${spin} 15s ease-in forwards infinite;
  }
  &:nth-child(7) {
    height: 300px;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 20vh;
    right: 10vw;
    animation: ${spin} 17s ease-in forwards infinite;
  }
  &:nth-child(8) {
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 60vh;
    right: 5vw;
    animation: ${spin} 12s ease-in forwards infinite;
  }
  &:nth-child(9) {
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 8vh;
    right: 50vw;
    animation: ${spin} 9s ease-in forwards infinite;
  }
  &:nth-child(10) {
    height: 150px;
    width: 150px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 50vh;
    left: 5vw;
    animation: ${spin} 11s ease-in forwards infinite;
  }
  &:nth-child(11) {
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 5vh;
    left: 25vw;
    animation: ${spin} 11s ease-in forwards infinite;
  }
  &:nth-child(12) {
    height: 130px;
    width: 130px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 1vh;
    right: 25vw;
    animation: ${spin} 7s ease-in forwards infinite;
  }
`;
