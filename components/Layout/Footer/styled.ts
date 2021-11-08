import { styled } from "~/theme";

export const StyledWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden; // TODO: remove
  padding: ${({ theme }) => theme.rem(25)} 0 0;
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledContent = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(35)};
`;

export const StyledCopyright = styled.div`
  background-color: black;
  color: white;
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.font}`};
  height: ${({ theme }) => theme.rem(45)};
  line-height: ${({ theme }) => theme.rem(45)};
  text-align: center;
`;
