import styled from "styled-components";
import { StyledTextProps } from "./types";

export const Span = styled.span<StyledTextProps>`
  background-color: transparent;
  color: ${(props) => (props?.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props?.size ? props.size : "14px")};
  font-weight: ${(props) => (props?.weight ? props.weight : 400)};
  font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,"Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
  text-align: ${(props) => (props?.align ? props?.align : "left")};
`;

export const P = styled.p<StyledTextProps>`
  background-color: transparent;
  color: ${(props) => (props?.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props?.size ? props.size : "14px")};
  font-weight: ${(props) => (props?.weight ? props.weight : 400)};
  font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,"Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
  text-align: ${(props) => (props?.align ? props?.align : "left")};
  &.shrink {
    @media only screen and (max-width: 600px) {
      max-width: 300px;
    }
  }
`;

export const H1 = styled.h1<StyledTextProps>`
  background-color: transparent;
  color: ${(props) => (props?.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props?.size ? props.size : "14px")};
  font-weight: ${(props) => (props?.weight ? props.weight : 400)};
  font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,"Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
  text-align: ${(props) => (props?.align ? props?.align : "left")};
`;
