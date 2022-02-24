import styled from "styled-components";

export const ExpItem = styled.div`
  width: 300px;
  border-left: 2px solid rgba(138, 25, 255, 1);
  border-bottom: 2px solid rgba(138, 25, 255, 1);
  border-radius: 2px;
  transition: all 0.25s;
  margin-inline: 4px;
  &:hover {
    transform: scale(1.02) translate(0px, -4px);
    box-shadow: -2px 2px 8px rgba(138, 25, 255, 1);
    transition: all 0.25s;
    cursor: pointer;
  }
`;

export const ExpHeading = styled.div`
  padding: 8px;
  width: 300px;
  background-color: rgba(138, 25, 255, 0.1);
  color: rgba(138, 25, 255, 1);
  border-bottom: 2px solid rgba(138, 25, 255, 1);
`;

export const ExpBody = styled.div`
  padding: 8px;
  width: 300px;
  height: 128px;
  text-align: justify;
`;

export const ExpWrapper = styled.div`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 48px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin-top: 64px;
    margin-bottom: 64px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-top: 64px;
    margin-bottom: 64px;
  }
`;

/**
 * @description animated row flex
 */
export const AnimatedContainer = styled.div`
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const SpinAnimationWrapper = styled.div`
  &.visible {
    transform: scale(0deg);
    opacity: 1;
    transition: all 1s;
    transition-delay: 0.25s;
  }
  &.in-visible {
    transform: rotate(360deg);
    opacity: 0;
    transition: all 1s;
    transition-delay: 0.25s;
  }
`;
