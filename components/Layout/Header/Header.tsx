import React from "react";
import Link from "next/link";

import { Menu } from "./Menu";
import { Cart } from "./Cart";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledLayout, StyledLogo } from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <Container>
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
    </Container>
  </StyledWrapper>
);

export { Header };
