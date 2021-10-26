import React from "react";

import { StyledWrapper } from "./styled";

const Slider: React.FC = () => (
  <StyledWrapper>
    <img
      alt="Slide"
      src="/images/slider_img.png"
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
    />
  </StyledWrapper>
);

export { Slider };
