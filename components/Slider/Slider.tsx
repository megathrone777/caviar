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
import { TSlide } from "~/components";

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

interface TProps {
  slides: TSlide[];
}

const Slider: React.FC<TProps> = ({ slides }) => {
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
        {slides.map(
          ({ image, title }: TSlide): React.ReactElement => (
            <>
              <StyledLayout>
                <Container>
                  <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />
                  <Button inverted type="button">
                    Перейти в магазин
                  </Button>
                </Container>
              </StyledLayout>
              <img alt="Slide" src={image.url} />
            </>
          )
        )}
      </SlickSlider>
    </StyledWrapper>
  );
};

export { Slider };
