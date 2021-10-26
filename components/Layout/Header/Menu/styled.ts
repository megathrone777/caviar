import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  height: 100%;
`;

export const StyledList = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const StyledItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(27)};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => `${theme.rem(13)} ${theme.fonts.fontLight}`};
  letter-spacing: ${({ theme }) => theme.rem(2)};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
