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
  margin-right: ${({ theme }) => theme.rem(30)};

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledLink = styled.a<{ isActive?: boolean }>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.orange : "white")};
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.fontBold}`};
  letter-spacing: ${({ theme }) => theme.rem(2)};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
