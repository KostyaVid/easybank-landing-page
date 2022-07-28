import s from './Menu.module.scss';

interface IMenuProps {
  activeMenuMobile: boolean;
}

const Menu = ({ activeMenuMobile }: IMenuProps) => {
  return (
    <nav className={[s.nav, activeMenuMobile ? s.activeMenuMobile : ''].join(' ')}>
      <ul className={s.items}>
        <li className={s.item}>Home</li>
        <li className={s.item}>About</li>
        <li className={s.item}>Contact</li>
        <li className={s.item}>Blog</li>
        <li className={s.item}>Careers</li>
      </ul>
    </nav>
  );
};

export default Menu;
