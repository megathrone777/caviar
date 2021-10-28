import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 25%;

  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: ${({ theme }) => theme.rem(140)};
`;

export const StyledImage = styled.img`
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.rem(4)};
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  display: block;
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontQanelasBlack}`};
  text-transform: uppercase;
  white-space: nowrap;
  
`;
