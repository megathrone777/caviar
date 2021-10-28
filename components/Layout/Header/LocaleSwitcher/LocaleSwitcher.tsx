import React from "react";

import { StyledWrapper, StyledList, StyledItem, StyledLink } from "./styled";

const LocaleSwitcher: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <StyledItem>
          <StyledLink href="#">EN</StyledLink>
        </StyledItem>
        {/* <StyledItem>
          <StyledLink href="#">CZ</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#">DE</StyledLink>
        </StyledItem> */}
        <StyledItem>
          <StyledLink href="#">RU</StyledLink>
        </StyledItem>
      </StyledList>
    </StyledWrapper>
  );
};

export { LocaleSwitcher };
