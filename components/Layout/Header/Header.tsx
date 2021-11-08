import React, { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Cart } from "./Cart";
import { Panel } from "./Panel";
import { Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledLayout,
  StyledButton,
  StyledButtonHelper,
} from "./styled";

const Header: React.FC = () => {
  const [menuIsOpened, toggleMenuIsOpened] = useState<boolean>(false);

  const handleMenu = (): void => {
    toggleMenuIsOpened(!menuIsOpened);
  };

  useEffect((): void => {
    if (menuIsOpened) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "visible";
  }, [menuIsOpened]);

  return (
    <>
      <Panel />
      <StyledWrapper>
        <Container>
          <StyledLayout>
            <Logo menuIsOpened={menuIsOpened} />
            <Menu isOpened={menuIsOpened} />
            <Cart />
          </StyledLayout>

          <StyledButton
            isOpened={menuIsOpened}
            onClick={handleMenu}
            type="button"
          >
            <StyledButtonHelper isLeft isHalf isOpened={menuIsOpened} />
            <StyledButtonHelper isOpened={menuIsOpened} />
            <StyledButtonHelper isRight isHalf isOpened={menuIsOpened} />
          </StyledButton>
        </Container>
      </StyledWrapper>
    </>
  );
};

export { Header };
