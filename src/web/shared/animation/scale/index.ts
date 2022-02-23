import styled from "styled-components";
import { ScaleAnimationType } from "./types";

export const ScaleAllAnimation = styled.div<ScaleAnimationType>`
  &.visible {
    transform: scale(${(props) => props.to});
    opacity: 1;
    transition: all 0.5s;
  }
  &.in-visible {
    transform: scale(${(props) => props.from});
    opacity: ${(props) => (props.easeIn ? 0 : 1)};
    transition: all 0.5s;
  }
`;

export const ScaleXAnimation = styled.div<ScaleAnimationType>`
  &.visible {
    transform: scale(${(props) => props.to});
    opacity: 1;
    transition: all 0.5s;
  }
  &.in-visible {
    transform: scale(${(props) => props.from});
    opacity: ${(props) => (props.easeIn ? 0 : 1)};
    transition: all 0.5s;
  }
`;

export const ScaleYAnimation = styled.div<ScaleAnimationType>`
  &.visible {
    transform: scale(${(props) => props.to});
    opacity: 1;
    transition: all 0.5s;
  }
  &.in-visible {
    transform: scale(${(props) => props.from});
    opacity: ${(props) => (props.easeIn ? 0 : 1)};
    transition: all 0.5s;
  }
`;
