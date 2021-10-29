import { styled } from "~/theme";

export const StyledWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: ${({ theme }) => theme.rem(420)};
`;
