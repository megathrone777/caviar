import { styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledLink = styled.a`
  display: block;
  position: relative;
  width: ${({ theme }) => theme.rem(40)};

  &:focus {
    outline: none;
  }
`;

export const StyledIcon = styled.i`
  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledQuantity = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  display: block;
  font: ${({ theme }) => `${theme.rem(13)} ${theme.fonts.fontBold}`};
  left: ${({ theme }) => theme.rem(6)};
  position: absolute;
  right: 0;
  text-align: center;
  top: ${({ theme }) => theme.rem(6)};
`;
