import styled, { createGlobalStyle } from "styled-components";

/**
 * @description Global CSS
 */

export const GlobalCssBase = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap');
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
  background-color: #fff;
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
}
`;

/**
 * @description page wrapper
 */
export const PageWrapper = styled.div`
  color: white;
  width: calc(100vw);
  max-width: calc(100vw);
  overflow-x: hidden;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    padding-top: 50px;
    padding-inline: 10px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding-top: 96px;
    padding-inline: 12px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding-top: 108px;
    padding-inline: 14px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding-top: 108px;
    padding-inline: 16px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding-top: 64px;
    padding-inline: 16px;
  }

  &.h {
    min-height: 100vh;
  }

  &.b {
    @media only screen and (max-width: 600px) {
      padding-top: 24px;
      padding-inline: 10px;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      padding-top: 48px;
      padding-inline: 12px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      padding-top: 54px;
      padding-inline: 14px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      padding-top: 54px;
      padding-inline: 16px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      padding-top: 32px;
      padding-inline: 16px;
    }
  }
`;

export const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 100vh;
  max-width: calc(100vw-4px);
  overflow-y: scroll;
`;
