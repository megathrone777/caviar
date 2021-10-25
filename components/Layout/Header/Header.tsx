import React from "react";
import Link from "next/link";

import { Menu } from "./Menu";
import { Cart } from "./Cart";
import { StyledWrapper, StyledLayout, StyledLogo } from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <StyledLayout>
      <StyledLogo>
        <Link href="/" passHref>
          <a>
            <img alt="Logo" src="/images/logo_img.png" />
          </a>
        </Link>
      </StyledLogo>

      <Menu />
      <Cart />
    </StyledLayout>
  </StyledWrapper>
);

export { Header };
