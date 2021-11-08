import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { StyledWrapper, StyledList, StyledItem, StyledLink } from "./styled";

import menuItems from "./menuItems.json";

interface TMenuItem {
  id: string;
  href: string;
  text: string;
}

interface TProps {
  isOpened: boolean;
}

const Menu: React.FC<TProps> = ({ isOpened }) => {
  const router = useRouter();

  return (
    <StyledWrapper isOpened={isOpened}>
      {menuItems && !!menuItems.length && (
        <StyledList>
          {menuItems.map(
            ({ id, href, text }: TMenuItem): React.ReactElement => (
              <StyledItem key={`${id}-${text}`}>
                <Link href={href} passHref>
                  <StyledLink isActive={router.pathname === href}>
                    {text}
                  </StyledLink>
                </Link>
              </StyledItem>
            )
          )}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export { Menu };
