import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  height: ${({ theme }) => theme.rem(500)};
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledLayout = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(55)} ${theme.fonts.fontBlack}`};
  letter-spacing: ${({ theme }) => theme.rem(1)};
  max-width: ${({ theme }) => theme.rem(650)};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  text-transform: uppercase;
`;
