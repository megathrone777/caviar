import React from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Cart } from "./Cart";
import { Panel } from "./Panel";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledLayout, StyledOptions } from "./styled";

const Header: React.FC = () => (
  <>
    <Panel />
    <StyledWrapper>
      <Container>
        <StyledLayout>
          <Logo />
          <Menu />

          <StyledOptions>
            <Cart />
          </StyledOptions>
        </StyledLayout>
      </Container>
    </StyledWrapper>
  </>
);

export { Header };
