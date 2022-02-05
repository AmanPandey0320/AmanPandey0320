import styled from "styled-components";
import { FlexContainerProps, FlexItemProps } from "./types";

/**
 *
 */
export const RowFlex = styled.div<FlexContainerProps>`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) =>
    props?.justify ? props.justify : "flex-start"};
  align-items: ${(props) =>
    props?.alignItems ? props.alignItems : "flex-start"};
`;

/**
 *
 */
export const ColFlex = styled.div<FlexContainerProps>`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) =>
    props?.justify ? props.justify : "flex-start"};
  align-items: ${(props) =>
    props?.alignItems ? props.alignItems : "flex-start"};
`;

/**
 *
 */
export const ItemFlex = styled.div<FlexItemProps>`
  order: ${(props) => (props?.order ? props.order : 0)};
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-grow: ${(props) => (props?.xs ? props.xs : 0)};
    margin: 8px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    flex-grow: ${(props) => (props?.sm ? props.sm : 0)};
    margin: 8px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-grow: ${(props) => (props?.md ? props.md : 0)};
    margin: 8px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-grow: ${(props) => (props?.lg ? props.lg : 0)};
    margin: 8px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    flex-grow: ${(props) => (props?.xl ? props.xl : 0)};
    margin: 8px;
  }
`;
