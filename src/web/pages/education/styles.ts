import styled from "styled-components";

export const EduItem = styled.div`
  max-width: 320px;
  padding: 8px;
  border: 2px solid #bababa;
  border-radius: 8px;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.02) translate(0px, -4px);
    box-shadow: 0px 0px 12px white;
    transition: all 0.25s;
    cursor: pointer;
  }
`;

export const EduWrapper = styled.div`
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
    margin-top: 16px;
    margin-bottom: 16px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

/**
 * @description animated row flex
 */
export const AnimatedContainer = styled.div`
  flex-flow: row wrap;
  justify-content: space-between;
`;
