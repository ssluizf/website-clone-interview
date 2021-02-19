import React from 'react';
import { Link } from 'react-router-dom'
import comb from '../../assets/img/comb.jpg'

import { Container, Card, CardImage, Band, Line } from '../../styles/components/Content';

function Content() {
  return (
    <Container>
      <Card>
        <h3>COMO ESCOLHER O MELHOR SHAMPOO?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum numquam voluptate. Quis, minus dolore cumque unde eveniet quisquam accusamus reiciendis architecto laboriosam fuga officia animi saepe ut sed totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum, cupiditate tempora voluptate veritatis repudiandae maxime doloribus beatae excepturi consequatur quos nisi debitis autem nesciunt ullam tempore sapiente et. Soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae adipisci natus id, atque necessitatibus, amet vero facilis voluptate quia ab ratione eos illo minus tempore asperiores quod qui nam quidem?</p>
      </Card>
      <CardImage>
        <Band>
          <p>CONHEÇA NOSSOS <Link to="/">SHAMPOOS</Link></p>
        </Band>
        <img src={comb} alt="Comb" />
      </CardImage>
      <Card>
        <h3>QUEDA DE CABELO NUNCA MAIS?</h3>
        <p>Lorem ipsum dolor sit amet consectetur <strong>adipisicing</strong> elit. Similique harum numquam voluptate. Quis, minus dolore cumque unde eveniet quisquam accusamus reiciendis architecto laboriosam fuga officia animi saepe ut sed totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum, cupiditate tempora voluptate veritatis repudiandae maxime doloribus beatae excepturi consequatur quos nisi debitis autem nesciunt ullam tempore sapiente et. Soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae adipisci natus id, atque necessitatibus, amet vero facilis voluptate quia ab ratione eos illo minus tempore asperiores quod qui nam quidem?</p>
      </Card>
      <Card>
        <h3>ANTICASPA?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum numquam voluptate. Quis, minus dolore cumque unde <strong>eveniet</strong> quisquam accusamus reiciendis architecto laboriosam fuga officia animi saepe ut sed totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum, cupiditate tempora voluptate veritatis repudiandae maxime doloribus beatae excepturi consequatur quos nisi debitis autem nesciunt ullam tempore sapiente et. Soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae adipisci natus id, atque necessitatibus, amet vero facilis voluptate quia ab ratione eos illo minus tempore asperiores quod qui nam quidem?</p>
      </Card>
      <Band alignCenter>
        <p>Para mais informações sobre o combate à caspa, acesse o <Link to="/">Dermaclub</Link></p>
      </Band>
      <Line />
    </Container>
  );
}

export default Content;