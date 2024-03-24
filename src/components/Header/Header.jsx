import { useState } from 'react';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

import style from './Header.module.css';
import { ReactComponent as Logo } from '../../image/svg/LogoApe.svg';
import { ReactComponent as Discord } from '../../image/svg/Discord.svg';
import { ReactComponent as LogoMark } from '../../image/svg/Vector.svg';
import { ReactComponent as XIcon } from '../../image/svg/XLogo.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={style.header}>
      <a href="./index.html">
        <Logo
          className={isMenuOpen ? style.header__logoOpened : style.header__logo}
          viewBox="0 0 65 65"
        />
      </a>

      <ul className={style.header__list}>
        <li
          className={isMenuOpen ? style.header__itemOpened : style.header__item}
        >
          <button
            className={isMenuOpen ? style.header__btnOpened : style.header__btn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </li>
        <li
          className={isMenuOpen ? style.header__itemOpened : style.header__item}
        >
          <a href="https://discord.com/">
            <Discord
              className={
                isMenuOpen ? style.header__iconOpened : style.header__icon
              }
              viewBox="0 0 24 24"
            />
          </a>
        </li>
        <li
          className={isMenuOpen ? style.header__itemOpened : style.header__item}
        >
          <a href="https://opensea.io/">
            <LogoMark
              className={
                isMenuOpen ? style.header__iconOpened : style.header__icon
              }
              viewBox="0 0 24 24"
            />
          </a>
        </li>
        <li
          className={isMenuOpen ? style.header__itemOpened : style.header__item}
        >
          <a href="https://twitter.com/?lang=en">
            <XIcon
              className={
                isMenuOpen ? style.header__iconOpened : style.header__icon
              }
              viewBox="0 0 24 24"
            />
          </a>
        </li>
      </ul>

      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};
