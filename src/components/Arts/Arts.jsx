import Slider from 'react-slick';
import { useRef } from 'react';
import { nanoid } from 'nanoid';

import style from './Arts.module.css';
import { Title } from 'components/Title/Title';

const imagesContext = require.context(
  '../../image/Arts',
  false,
  /\.(png|jpe?g|svg)$/
);
const imagePaths = imagesContext
  .keys()
  .filter(key => !key.includes('Arts'))
  .map(imagesContext);

export const Arts = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div id="arts" className={style.arts__container}>
      <Title title="Collection" />
      <Slider
        className={style.arts__slider}
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {imagePaths.map((path, index) => (
          <div className={style.arts__card} key={nanoid()}>
            <img
              className={style.arts__img}
              src={path}
              alt={`M ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      <div className={style.arts__btnContainer}>
        <button onClick={previous} className={style.arts__cardBtn}>
          Prev
        </button>
        <button onClick={next} className={style.arts__cardBtn}>
          Next
        </button>
      </div>
    </div>
  );
};
