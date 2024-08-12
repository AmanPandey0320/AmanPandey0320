import styled from "styled-components";
import constants from "../../../assets/constant";

export const Contained = styled.button``;
export const Outlined = styled.button`
  background-color: transparent;
  border: 1px solid ${constants.color.text};
  color: ${constants.color.text};
  padding: 12px 16px;
  margin: 2px;
  border-radius: 2px;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;
export const Text = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px 16px;
  margin: 2px;
  border-radius: 2px;
  font-size: 16px;
  color: ${constants.color.text};
  :hover {
    cursor: pointer;
  }
`;
export const Animated = styled.button`
  background: none;
  border: 2px solid;
  border-color: ${constants.color.text};
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: ${constants.color.text};
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif, sans-serif, -apple-system, BlinkMacSystemFont,
    "Segoe UI","Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  transition: 0.25s;
  box-shadow: 0.3em 0.3em 0 0 ${constants.color.text},
    inset 0.3em 0.3em 0 0 ${constants.color.text};
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 0 ${constants.color.hilight},
      inset 6em 3.5em 0 0 ${constants.color.hilight};
    border-color: ${constants.color.hilight};
    color: #fff;
    transition: 0.25s;
  }
  :focus {
    cursor: pointer;
    box-shadow: 0 0 0 0 ${constants.color.hilight},
      inset 6em 3.5em 0 0 ${constants.color.hilight};
    border-color: ${constants.color.hilight};
    color: #fff;
    transition: 0.25s;
  }
`;
