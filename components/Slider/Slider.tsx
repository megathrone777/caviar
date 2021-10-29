import React from "react";
import SlickSlider, { CustomArrowProps, Settings } from "react-slick";

import { Button, Container } from "~/theme/components";
import { SvgAngleIcon } from "~/icons";
import {
  StyledWrapper,
  StyledArrowLeft,
  StyledArrowRight,
  StyledLayout,
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
        <>
          <StyledLayout>
            <Container>
              <StyledTitle>
                Икра от
                <br /> лицензированного
                <br /> производителя
              </StyledTitle>
              <Button inverted type="button">
                Перейти в магазин
              </Button>
            </Container>
          </StyledLayout>
          <img alt="Slide" src="/images/slider_img.jpg" />
        </>
        <>
          <StyledLayout alignRight>
            <Container>
              <StyledTitle>
                Икра c завода:
                <br /> качество - выше, <br />
                цена - ниже
              </StyledTitle>
              <Button type="button">Перейти в магазин</Button>
            </Container>
          </StyledLayout>
          <img alt="Slide" src="/images/slider_img2.jpg" />
        </>
        <>
          <StyledLayout>
            <Container>
              <StyledTitle>Рыбные деликатесы</StyledTitle>
              <Button type="button">Перейти в магазин</Button>
            </Container>
          </StyledLayout>
          <img alt="Slide" src="/images/slider_img3.jpg" />
        </>
      </SlickSlider>
    </StyledWrapper>
  );
};

export { Slider };
