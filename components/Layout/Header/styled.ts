import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  height: ${({ theme }) => theme.rem(90)};
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  flex: 0 1 33%;
`;
