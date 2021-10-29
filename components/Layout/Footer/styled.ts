import { styled } from "~/theme";

export const StyledWrapper = styled.footer`
  background: url("/images/main_bg.png");
  min-height: ${({ theme }) => theme.rem(420)};
`;
