import { css } from "~/theme";

const base = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.fonts.initialFontSize}px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.font};
  }
`;

export { base };
