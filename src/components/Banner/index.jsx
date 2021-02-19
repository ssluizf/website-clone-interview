import React from 'react';

import { Container, HeaderContainer, Image } from '../../styles/components/Banner';
import hair from '../../assets/img/hair.jpg'

function Banner() {
  return (
    <Container>
      <Image src={hair} alt="Hair"></Image>
      <HeaderContainer>
        <header>
          <h1>CAPILAR <strong>FORTALECIMENTO</strong></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo earum magnam pariatur, quidem iusto reiciendis aspernatur odit.</p>
        </header>
      </HeaderContainer>
    </Container>
  );
}

export default Banner;