import { Title } from 'components/Title/Title';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './MindMap.module.css';
import arrowIcon from '../../image/svg/up-left-arrow.svg';

export const MindMap = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsSliderVisible(windowWidth < 768);
  }, [windowWidth]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div id="m-map" className={style.mindMap__container}>
      <Title title="Mind map" />
      {isSliderVisible ? (
        <div className={style.mindMap__sliderWrapper}>
          <div className={style.mindMap__slider}>
            <Slider ref={sliderRef} {...settings}>
              <div className={style.mindMap__card}>
                <p className={style.mindMap__cardText}>
                  All owners of APE NFTs and all future collections will receive
                  a percentage of sales based on the number of NFTs they own
                </p>
                <h2 className={style.mindMap__cardTitle}>YAPE DROP</h2>
              </div>
              <div className={style.mindMap__card}>
                <p className={style.mindMap__cardText}>
                  Launch of the 2nd YACHT Collection Releasing the first version
                  of the Ape Slam Game
                </p>
                <h2 className={style.mindMap__cardTitle}>New Collection</h2>
              </div>
              <div className={style.mindMap__card}>
                <p className={style.mindMap__cardText}>
                  Launch your own token, the proceeds of which will go to a
                  global fund to LAUNCH YACHT CLUB AND PROMOTE it
                </p>
                <h2 className={style.mindMap__cardTitle}>Token</h2>
              </div>

              <div className={style.mindMap__cardLink}>
                <a href="https://github.com/hodakivskaK">
                  <img
                    src={arrowIcon}
                    className={style.mindMap__arrowIcon}
                    alt="arrow up"
                  />
                  <h2 className={style.mindMap__cardTitle}>
                    {' '}
                    Learn more in mind map
                  </h2>
                </a>
              </div>
            </Slider>
          </div>
          <div className={style.mindMap__btnContainer}>
            <button onClick={previous} className={style.mindMap__cardBtn}>
              Prev
            </button>
            <button onClick={next} className={style.mindMap__cardBtn}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className={style.mindMap__collection}>
          <div className={style.mindMap__card}>
            <p className={style.mindMap__cardText}>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <h2 className={style.mindMap__cardTitle}>YAPE DROP</h2>
          </div>
          <div className={style.mindMap__card}>
            <p className={style.mindMap__cardText}>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h2 className={style.mindMap__cardTitle}>New Collection</h2>
          </div>
          <div className={style.mindMap__card}>
            <p className={style.mindMap__cardText}>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h2 className={style.mindMap__cardTitle}>Token</h2>
          </div>
          <a href="https://github.com/hodakivskaK">
            <div className={style.mindMap__card}>
              <img
                className={style.mindMap__arrowIcon}
                src={arrowIcon}
                alt="arrow up"
              />
              <h2 className={style.mindMap__cardTitle}>
                {' '}
                Learn more in mind map
              </h2>
            </div>{' '}
          </a>
        </div>
      )}
    </div>
  );
};
