import { styled } from "~/theme";
import { respondTo } from "~/theme/mixins";

export const StyledWrapper = styled.header`
  background: url("/images/main_bg.png");
  height: ${({ theme }) => theme.rem(100)};

  ${respondTo.tablet`
   background: red;
  `}
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;
