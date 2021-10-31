import React from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledContent,
  StyledLayout,
  StyledCopyright,
} from "./styled";

const Footer: React.FC = () => (
  <StyledWrapper>
    <StyledContent>
      <Container>
        <StyledLayout>
          <Logo />
          <Menu />
        </StyledLayout>
      </Container>
    </StyledContent>

    <StyledCopyright>Caviar Express &copy; 2002 - 2021</StyledCopyright>
  </StyledWrapper>
);

export { Footer };
