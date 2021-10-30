import React from "react";

import { Button, Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledImage,
  StyledTitle,
  StyledLayout,
} from "./styled";

const Media: React.FC = () => (
  <StyledWrapper>
    <StyledImage alt="Media image" src="/images/media_img.jpg" />

    <StyledLayout>
      <Container>
        <StyledTitle>Покупайте икру из первых рук</StyledTitle>
        <Button href="/shop">Перейти в магазин</Button>
      </Container>
    </StyledLayout>
  </StyledWrapper>
);

export { Media };
