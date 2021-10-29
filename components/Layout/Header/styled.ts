import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  background: url("/images/main_bg.png");
  height: ${({ theme }) => theme.rem(100)};
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const StyledOptions = styled.div`
  align-items: center;
  display: flex;
  flex: 0 1 25%;
  justify-content: flex-end;
`;
