import React from "react";

import { StyledWrapper, StyledList, StyledItem, StyledLink } from "./styled";

const Menu: React.FC = () => (
  <StyledWrapper>
    <StyledList>
      <StyledItem>
        <StyledLink href="#">Home</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>Catalog</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>Cart</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>Contacts</StyledLink>
      </StyledItem>
    </StyledList>
  </StyledWrapper>
);

export { Menu };
