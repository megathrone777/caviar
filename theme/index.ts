import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from "styled-components";

import { colors, TColors } from "./variables/colors";
import { fonts, TFonts } from "./variables/fonts";

export interface ThemeInterface {
  colors: TColors;
  fonts: TFonts;
  rem: (px: number) => string;
}

const theme: ThemeInterface = {
  colors,
  fonts,
  rem: (px) => {
    const baseFontSize = fonts.initialFontSize;
    return `${px / baseFontSize}rem`;
  },
};

export { createGlobalStyle, css, styled, theme, ThemeProvider };
