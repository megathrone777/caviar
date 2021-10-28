import React from "react";

import { LocaleSwitcher } from "../LocaleSwitcher";
import { Container } from "~/theme/components";
import { StyledWrapper, StyledLink } from "./styled";

const Panel: React.FC = () => (
  <StyledWrapper>
    <Container>
      <StyledLink href="tel:+36202409715">
        +36 20 240 97 15 c 9 до 20 каждый день
      </StyledLink>
      <LocaleSwitcher />
    </Container>
  </StyledWrapper>
);

export { Panel };
