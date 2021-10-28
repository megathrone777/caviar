import { styled } from "../";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
    transition: color 0.2s ease-in, background-color 0.2s ease-in;
  width: ${({ theme }) => theme.rem(150)};
`;
