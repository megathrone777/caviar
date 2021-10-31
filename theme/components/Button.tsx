import React from "react";
import Link from "next/link";

import { css, styled } from "../";

interface TProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLLinkElement> {
  href?: string;
  inverted?: boolean;
}

const Button: React.FC<TProps> = ({ children, onClick, href, inverted }) => (
  <>
    {href ? (
      <Link href={href} passHref>
        <StyledLink href={href} inverted={inverted}>
          {children}
        </StyledLink>
      </Link>
    ) : (
      <StyledButton inverted={inverted} onClick={onClick} type="button">
        {children}
      </StyledButton>
    )}
  </>
);

const styles = css`
  color: white;
  display: inline-block;
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.fontBold}`};
  height: ${({ theme }) => theme.rem(50)};
  min-width: ${({ theme }) => theme.rem(150)};
  padding-left: ${({ theme }) => theme.rem(35)};
  padding-right: ${({ theme }) => theme.rem(35)};
  text-transform: uppercase;
  transition: background-color 0.2s ease-in;
`;

const StyledLink = styled.a<{ inverted?: boolean }>`
  ${styles};
  background-color: ${({ inverted, theme }) =>
    inverted ? theme.colors.black : theme.colors.orange};
  line-height: ${({ theme }) => theme.rem(50)};
  text-decoration: none;

  &:hover {
    background-color: ${({ inverted, theme }) =>
      inverted ? theme.colors.orange : theme.colors.black};
  }
`;

const StyledButton = styled.button<{ inverted?: boolean }>`
  ${styles};
  background-color: ${({ inverted, theme }) =>
    inverted ? theme.colors.black : theme.colors.orange};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ inverted, theme }) =>
      inverted ? theme.colors.orange : theme.colors.black};
  }
`;

export { Button };
