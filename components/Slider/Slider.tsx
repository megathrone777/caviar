import React from "react";
import SlickSlider, { CustomArrowProps, Settings } from "react-slick";

import { SvgAngleIcon } from "~/icons";
import {
  StyledWrapper,
  StyledArrowLeft,
  StyledArrowRight,
  StyledTitle,
} from "./styled";

const ArrowLeft: React.FC<CustomArrowProps> = ({ className, onClick }) => (
  <StyledArrowLeft className={className} onClick={onClick} type="button">
    <SvgAngleIcon />
  </StyledArrowLeft>
);

const ArrowRight: React.FC<CustomArrowProps> = ({ className, onClick }) => (
  <StyledArrowRight className={className} onClick={onClick} type="button">
    <SvgAngleIcon />
  </StyledArrowRight>
);

const Slider: React.FC = () => {
  const settings: Settings = {
    autoplay: true,
    draggable: true,
    arrows: true,
    dots: false,
    fade: true,
    speed: 800,
    infinite: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <StyledWrapper>
      <SlickSlider {...settings}>
        <div>
          <StyledTitle>Икра от лицензированного производителя</StyledTitle>
          <img alt="Slide" src="/images/slider_img.jpeg" />
        </div>
        {/* <img alt="Slide 2" src="/images/slider_img2.jpg" /> */}
      </SlickSlider>
    </StyledWrapper>
  );
};

export { Slider };
