import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  align-items: center;
  background: url("/images/media_bg.jpg") center center/cover no-repeat;
  display: flex;
  height: ${({ theme }) => theme.rem(180)};
  justify-content: center;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  color: white;
  font: ${({ theme }) => `${theme.rem(56)} ${theme.fonts.fontBlack}`};
  letter-spacing: ${({ theme }) => theme.rem(2)};
  text-transform: uppercase;
`;
