import { styled } from "../";

export const Button = styled.button<{ inverted?: boolean }>`
  background-color: ${({ inverted, theme }) =>
    inverted ? theme.colors.black : theme.colors.orange};
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(12)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(50)};
  min-width: ${({ theme }) => theme.rem(150)};
  padding-left: ${({ theme }) => theme.rem(35)};
  padding-right: ${({ theme }) => theme.rem(35)};
  text-transform: uppercase;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ inverted, theme }) =>
      inverted ? theme.colors.orange : theme.colors.black};
  }
`;
