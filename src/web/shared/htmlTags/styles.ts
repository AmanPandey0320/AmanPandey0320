import styled from "styled-components";
import constants from "../../../assets/constant";
import { TagProps } from "./types";

export const TagWrapper = styled.div`
  padding-left: 32px;
  padding-top: 8px;
  padding-bottom: 4px;
  @media only screen and (max-width: 600px) {
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 2px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding-left: 12px;
    padding-top: 4px;
    padding-bottom: 2px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    padding-top: 6px;
    padding-bottom: 3px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding-left: 24px;
    padding-top: 8px;
    padding-bottom: 4px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding-left: 32px;
    padding-top: 8px;
    padding-bottom: 4px;
  }
`;
export const Tag = styled.p<TagProps>`
  font-family: "Vujahday Script", cursive;
  color: ${constants.color.textBg};
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    width: ${(props: any) =>
      props?.width ? `${props.width * 0.56}px` : "100vw"};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
    display: ${(props) => (props.hide ? "none" : "block")};
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }
`;

export const TagSpan = styled.span<TagProps>`
  font-family: "Vujahday Script", cursive;
  color: ${constants.color.textBg};
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    width: ${(props: any) =>
      props?.width ? `${props.width * 0.56}px` : "100vw"};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
    display: ${(props) => (props.hide ? "none" : "block")};
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 18px;
    width: ${(props: any) => (props?.width ? `${props.width}px` : "100vw")};
    text-align: ${(props: any) =>
      props?.textAlign ? props.textAlign : "left"};
  }
`;
