import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  display: flex;
  flex: 0 1 33%;
  justify-content: flex-end;
`;

export const StyledLink = styled.a`
  display: block;
  position: relative;
  width: ${({ theme }) => theme.rem(40)};
`;

export const StyledIcon = styled.i`
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledQuantity = styled.span`
  display: block;
  top: ${({ theme }) => theme.rem(6)};
  left: 5px;
  right: 0;
  text-align: center;
  font: ${({ theme }) => `${theme.rem(13)} ${theme.fonts.fontBold}`};
  position: absolute;
`;
