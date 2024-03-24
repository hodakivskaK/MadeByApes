import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer__container}>
      <p className={style.footer__text}>
        © Yacht ape 2024 all rights reserved
      </p>
    </div>
  );
};
