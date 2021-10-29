import React from "react";

import { StyledWrapper, StyledList, StyledItem, StyledLink } from "./styled";

const LocaleSwitcher: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <StyledItem>
          <StyledLink href="#" isActive={false}>
            EN
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#" isActive={false}>
            CZ
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#" isActive={false}>
            DE
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="#" isActive>
            RU
          </StyledLink>
        </StyledItem>
      </StyledList>
    </StyledWrapper>
  );
};

export { LocaleSwitcher };
