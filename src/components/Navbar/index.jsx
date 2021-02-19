import React from 'react';

import { Container, SearchBox, IconTittle } from '../../styles/components/Navbar';
// import logo from '../../assets/img/logo.png'
// import User from '../../assets/svg/user-circle.svg'
// import Menu from '../../assets/svg/menu.svg'
// import Basket from '../../assets/svg/basket.svg'

function Navbar() {
  return (
    <Container>
      {/* <img src={logo} alt="Logo" /> */}
      <IconTittle>
        <p>CATEGORIAS</p>
      </IconTittle>
      <SearchBox placeholder="O que você procura?" />
      <IconTittle>
        <p>ENTRAR</p>
      </IconTittle>
    </Container>
  );
}

export default Navbar;