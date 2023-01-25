import { createGlobalStyle } from "styled-components";
import PressStart1 from "./fonts/PressStart2P-Regular.woff";
import PressStart2 from "./fonts/PressStart2P-Regular.woff2";

const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'Press Start';
        src: local('Press Start'), local('PressStart'),
        url(${PressStart2}) format('woff2'),
        url(${PressStart1}) format('woff');
    }

:root {
  /* Color Theme Swatches in Hex */
  --pastel-red: #FFB6B9; 
  --pastel-pink: #FED4D6; 
  --pastel-sand:  #FAE3D9;
  --pastel-mint:  #BBDED6; 
  --pastel-green: #61C0BF; 

  /* Purple Creature */
  --pc-outline: #242727;
  --pc-body: #c975ed;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Press Start", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}`;

export default GlobalStyle;
