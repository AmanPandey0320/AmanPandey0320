import styled, { createGlobalStyle } from "styled-components";
import constants from "../../../assets/constant";

/**
 * @description Global CSS
 */
export const GlobalCssBase = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
* {
	padding: 0;
	margin: 0;
	outline: none;
	box-sizing: border-box;
	scrollbar-color: #ff4d00 #f1f1f1;
	scrollbar-width:thin;
	scrollbar-arrow-color: red;
}
html,
body {
  background-color: ${constants.color.background};
	font-size: 16px;
	font-family: 'Roboto', 'Montserrat', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scroll-behavior: smooth;
	scrollbar-color: #ff4d00 #f1f1f1;
	scrollbar-width:thin;
  overflow-x:hidden;
  
  /* width */
::-webkit-scrollbar {
  width:8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 0px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #ff4d00; 
   border-radius: 0px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}`;

/**
 * @description page wrapper
 */
export const PageWrapper = styled.div`
  color: white;
  width: calc(100vw - 8px);
  max-width: calc(100vw - 8px);
  padding-inline: 10px;
  overflow-x: hidden;
`;
