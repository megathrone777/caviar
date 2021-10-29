import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  display: inline-block;
`;

export const StyledList = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  margin-left: ${({ theme }) => theme.rem(15)};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.font};
  text-decoration: none;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
