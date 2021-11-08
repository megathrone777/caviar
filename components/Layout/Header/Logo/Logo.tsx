import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledLink, StyledImage, StyledText } from "./styled";

interface TProps {
  menuIsOpened: boolean;
}

const Logo: React.FC<TProps> = ({ menuIsOpened }) => (
  <StyledWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <StyledImage alt="Logo" src="/images/logo_img.png" />
        <StyledText menuIsOpened={menuIsOpened}>Caviar Express</StyledText>
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { Logo };
