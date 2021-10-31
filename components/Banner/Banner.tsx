import React from "react";

import { StyledWrapper, StyledTitle } from "./styled";

interface TProps {
  title: string;
}

const Banner: React.FC<TProps> = ({ title }) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
);

export { Banner };
