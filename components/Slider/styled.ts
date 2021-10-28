import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  height: ${({ theme }) => theme.rem(550)};
  margin-bottom: ${({ theme }) => theme.rem(40)};
  position: relative;
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(64)} ${theme.fonts.fontQanelasBlack}`};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 700px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  text-transform: uppercase;
`;

const StyledArrow = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  height: ${({ theme }) => theme.rem(100)};
  padding: 0;
  top: 50%;
  width: ${({ theme }) => theme.rem(40)};
  z-index: 200;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledArrowLeft = styled(StyledArrow)`
  left: ${({ theme }) => theme.rem(100)};
  transform: translateY(-50%) rotate(180deg);
`;

export const StyledArrowRight = styled(StyledArrow)`
  right: ${({ theme }) => theme.rem(100)};
  transform: translateY(-50%);
`;
