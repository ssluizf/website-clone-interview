import React from 'react';

import { Container, HeaderContainer, Image, Actions } from '../../styles/components/Banner';
import hair from '../../assets/img/hair.jpg'
import { ReactComponent as Hair } from '../../assets/svg/hair.svg'
import { ReactComponent as Grid } from '../../assets/svg/grid.svg'
import { ReactComponent as Arrows } from '../../assets/svg/arrows.svg'

function Banner() {
  return (
    <Container>
      <Image src={hair} alt="Hair"></Image>
      <HeaderContainer>
        <header>
          <h1>CAPILAR <Hair/><strong>FORTALECIMENTO</strong></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo earum magnam pariatur, quidem iusto reiciendis aspernatur odit.</p>
        </header>
      </HeaderContainer>
      <Actions>
        <button>
          <Grid />
          <p>Quantidade</p>
        </button>
        <button>
          <Arrows />
          <p>Ordenar</p>
        </button>
      </Actions>
    </Container>
  );
}

export default Banner;