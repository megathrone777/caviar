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

const Menu: React.FC = () => {
  const router = useRouter();

  return (
    <StyledWrapper>
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
