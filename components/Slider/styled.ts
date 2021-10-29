import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  height: ${({ theme }) => theme.rem(550)};
  position: relative;
`;

export const StyledLayout = styled.div<{ alignRight?: boolean }>`
  height: auto;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: ${({ alignRight }) => (alignRight ? "right" : "center")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(64)} ${theme.fonts.fontBlack}`};
  margin-bottom: ${({ theme }) => theme.rem(15)};
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
  left: ${({ theme }) => theme.rem(70)};
  transform: translateY(-50%) rotate(180deg);
`;

export const StyledArrowRight = styled(StyledArrow)`
  right: ${({ theme }) => theme.rem(70)};
  transform: translateY(-50%);
`;
