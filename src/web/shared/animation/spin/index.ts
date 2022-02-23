import styled from "styled-components";
import { SpinAnimationType } from "./types";

export const SpinAnimation = styled.div<SpinAnimationType>`
  &.visible {
    transform: scale(${(props) => props.to}deg);
    opacity: 1;
    transition: all 1s;
    transition-delay: 0.25s;
  }
  &.in-visible {
    transform: rotate(${(props) => props.from}deg);
    opacity: ${(props) => (props.easeIn ? 0 : 1)};
    transition: all 0.1s;
  }
`;
