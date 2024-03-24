import { Link } from 'react-scroll';

import style from './Hero.module.css';

import imageMobile from '../../image/hero/mokeyImage.png';
import imageTablet from '../../image/hero/mokeyImage2.png';
import imageDesktop from '../../image/hero/mokeyImage3.png';

export const Hero = () => {
  return (
    <div className={style.hero__container}>
      <p className={style.hero__accentText}>diD yOu seE iT ?</p>
      <h1 className={style.hero__title}>
        YACHT
        <span className={style.hero__titleSpan}>APES</span>
      </h1>
      <p className={style.hero__accentText}>Apes aRe eveRywhere</p>

      <picture>
        <source media="(max-width: 767px)" srcSet={imageMobile} />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={imageTablet}
        />
        <source media="(min-width: 1280px)" srcSet={imageDesktop} />
        <img src={imageDesktop} alt="Monkey" className={style.hero__img} />
      </picture>

      <div className={style.hero__bottomBox}>
        <Link
          to="mint"
          spy={true}
          smooth={true}
          duration={800}
          className={style.hero__btn}
        >
          MEET APES
        </Link>
        <p className={style.hero__secondText}>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
      </div>
    </div>
  );
};
