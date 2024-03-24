import { Link } from 'react-scroll';

import style from './BurgerMenu.module.css';
import React, { useEffect } from 'react';

export const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(style.noScroll);
    } else {
      document.body.classList.remove(style.noScroll);
    }
    return () => {
      document.body.classList.remove(style.noScroll);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`${style.burger__wrapper} ${isMenuOpen ? style.burger__open : ''}`}
    >
      {isMenuOpen && (
        <div>
          <div className={style.burger__list}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={style.burger__link}
            >
              ABOUT
            </Link>

            <Link
              to="m-map"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={style.burger__link}
            >
              M-MAP
            </Link>

            <Link
              to="faq"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={style.burger__link}
            >
              FAQ
            </Link>

            <Link
              to="arts"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={style.burger__link}
            >
              ARTS
            </Link>
            <Link
              to="mint"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={style.burger__link}
            >
              MINT
            </Link>
            <p className={style.burger__copyright}>
              © Yacht ape 2024 all rights reserved
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
