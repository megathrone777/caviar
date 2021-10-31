import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  background: url("/images/main_bg.png");
  padding-bottom: ${({ theme }) => theme.rem(25)};
  padding-top: ${({ theme }) => theme.rem(25)};
`;

export const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledColumn = styled.div`
  flex: 0 1 45%;
  max-width: 45%;
`;

export const StyledImage = styled.img`
  mix-blend-mode: darken;
  max-width: 100%;
`;

export const StyledDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(25)};
  padding-top: ${({ theme }) => theme.rem(25)};

  > ul {
    margin-bottom: ${({ theme }) => theme.rem(10)};
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.font};
    margin-bottom: ${({ theme }) => theme.rem(10)};

    > em {
      display: block;
      margin-bottom: ${({ theme }) => theme.rem(10)};
      padding-left: ${({ theme }) => theme.rem(10)};
    }

    > strong {
      font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontSemiBold}`}; 
    }
  }
`;

export const StyledPrice = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font: ${({ theme }) => `${theme.rem(30)} ${theme.fonts.fontBold}`};
  margin-right: ${({ theme }) => theme.rem(50)};
`;

export const StyledWeight = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
`;

export const StyledInfo = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${({ theme }) => theme.rem(25)};
`;
