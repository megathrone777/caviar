import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  background: url("/images/main_bg.png");
  height: ${({ theme }) => theme.rem(100)};
  position: relative;
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const StyledButton = styled.button<{ isOpened: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: ${({ theme }) => theme.rem(35)};
  justify-content: space-between;
  padding: 0;
  position: absolute;
  right: ${({ theme }) => theme.rem(20)};
  top: ${({ theme }) => theme.rem(35)};
  transition: transform 330ms ease-out;
  width: ${({ theme }) => theme.rem(35)};
  transform: ${({ isOpened }) =>
    isOpened ? "rotate(-45deg)" : "rotate(0deg)"};
  z-index: 2002;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const StyledButtonHelper = styled.span<{
  isOpened: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  isHalf?: boolean;
}>`
  align-self: ${({ isRight }) => (isRight ? "flex-end" : "auto")};
  background-color: ${({ isOpened, theme }) =>
    isOpened ? "white" : theme.colors.orange};
  border-radius: ${({ theme }) => theme.rem(5)};
  height: ${({ theme }) => theme.rem(4)};
  opacity: 0.7;
  width: ${({ isHalf }) => (isHalf ? "50%" : "100%")};
  transform: ${({ isOpened, isRight, isLeft }) =>
    isOpened && isLeft
      ? "rotate(-90deg) translateX(3px)"
      : isOpened && isRight
      ? "rotate(-90deg) translateX(-3px)"
      : "none"};
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: ${({ isLeft, isRight }) =>
    isLeft ? "right" : isRight ? "left" : "none"};
`;
