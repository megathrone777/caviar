import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledLink, StyledImage, StyledText } from "./styled";

const Logo: React.FC = () => (
  <StyledWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <StyledImage alt="Logo" src="/images/logo_img.png" />
        <StyledText>Royal Caviar</StyledText>
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { Logo };
