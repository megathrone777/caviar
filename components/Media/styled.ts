import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.section`
  height: ${({ theme }) => theme.rem(880)};
  position: relative;

  ${includeBreakpoint.tablet`
    height: ${({ theme }) => theme.rem(350)};
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledLayout = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(53)} ${theme.fonts.fontBlack}`};
  letter-spacing: ${({ theme }) => theme.rem(1)};
  max-width: ${({ theme }) => theme.rem(650)};
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme.rem(20)};
  text-transform: uppercase;

  ${includeBreakpoint.tablet`
    font-size: ${({ theme }) => theme.rem(36)};
    max-width: ${({ theme }) => theme.rem(450)};
  `}
`;
