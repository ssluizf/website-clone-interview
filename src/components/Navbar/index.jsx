import React from 'react';
import { Link } from 'react-router-dom'

import { Container, SearchBox, IconLabeledButton } from '../../styles/components/Navbar';
import logo from '../../assets/img/logo.png'
import { ReactComponent as User } from '../../assets/svg/user-circle.svg'
import { ReactComponent as Menu } from '../../assets/svg/menu.svg'
import { ReactComponent as Basket } from '../../assets/svg/basket.svg'
import { ReactComponent as Search } from '../../assets/svg/search.svg'

function Navbar() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <IconLabeledButton>
        <Menu />
        <p>CATEGORIAS</p>
      </IconLabeledButton>
      <SearchBox>
        <input type="text" placeholder="O que você procura?" />
        <button type="submit"><Search /></button>
      </SearchBox>
      <IconLabeledButton>
        <User />
        <p>ENTRAR</p>
      </IconLabeledButton>
      <Link to="/shopping"><Basket /></Link>
    </Container>
  );
}

export default Navbar;