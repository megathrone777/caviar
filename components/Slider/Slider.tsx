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
          ({ image, title }: TSlide, index: number): React.ReactElement => (
            <React.Fragment key={`slide-${index}`}>
              <StyledLayout alignRight={index === 1}>
                <Container>
                  <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />
                  <Button href="/shop" inverted={index !== 1}>
                    Перейти в магазин
                  </Button>
                </Container>
              </StyledLayout>
              <img alt="Slide" src={image.url} />
            </React.Fragment>
          )
        )}
      </SlickSlider>
    </StyledWrapper>
  );
};

export { Slider };
