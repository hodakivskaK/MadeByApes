import style from './Ticker.module.css';
import cross from '../../../image/svg/add-sharp.svg';

export const Ticker = () => {
  return (
    <div className={style.ticker__container}>
      <div className={style.ticker__scroll}>
        <div className={style.ticker__content}>
          <img className={style.tickerSvg} src={cross} alt="cross" />
          HAVE NO LIMITS
          <img className={style.tickerSvg} src={cross} alt="cross" />
          Break rules
          <img className={style.tickerSvg} src={cross} alt="cross" />
          Destroy stereotypes
        </div>
        <div className={style.ticker__content}>
          <img className={style.tickerSvg} src={cross} alt="cross" />
          HAVE NO LIMITS
          <img className={style.tickerSvg} src={cross} alt="cross" />
          Break rules
          <img className={style.tickerSvg} src={cross} alt="cross" />
          Destroy stereotypes
        </div>
      </div>
    </div>
  );
};
