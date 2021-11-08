import { styled } from "~/theme";
import { includeBreakpoint } from "~/theme/mixins";

export const StyledWrapper = styled.div`
  border-bottom: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.blue}`};
  background-color: ${({ theme }) => theme.colors.grey};
  height: ${({ theme }) => theme.rem(40)};
  text-align: right;
  line-height: ${({ theme }) => theme.rem(40)};

  ${includeBreakpoint.mobile`
    height: auto;
    padding: ${({ theme }) => `${theme.rem(5)} 0`};
    text-align: center;
  `};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontLight}`};
`;
