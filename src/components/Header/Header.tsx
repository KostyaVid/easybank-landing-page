import { useState, createRef, useEffect } from 'react';
import Burger from '../Burger/Burger';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Menu from '../Menu/Menu';
import s from './Header.module.scss';

const Header = () => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

  function clickBurger() {
    setToggleMenuMobile(!toggleMenuMobile);
  }

  return (
    <header className={s.header}>
      <Container>
        <div className={s.verticalAlign}>
          <img src="./images/logo.svg" alt="Easy bank" />
          <Menu activeMenuMobile={toggleMenuMobile} />
          <div className={s.button}>
            <Button>Request Invite</Button>
          </div>
          <Burger onClick={clickBurger} activeMobileMenu={toggleMenuMobile} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
