import { useState } from 'react';

import style from './Faq.module.css';
import monkey_1 from '../../image/faq/monkey_card1.png';
import monkey_2 from '../../image/faq/monkey_card2.png';
import monkey_3 from '../../image/faq/monkey_card3.png';
import monkey_4 from '../../image/faq/monkey_card4.png';
import { Title } from 'components/Title/Title';

export const Faq = () => {
  const [openAnswer, setOpenAnswer] = useState(3);

  return (
    <div id="faq" className={style.faq__container}>
      <Title title="FAQ" />

      <ul className={style.faq__list}>
        <li
          className={
            openAnswer === 1 ? style.faq__item_active : style.faq__item
          }
          onClick={() => setOpenAnswer(1)}
        >
          <img
            src={monkey_1}
            alt="Monkey card"
            className={
              openAnswer === 1 ? style.faq__image_active : style.faq__image
            }
          />

          <div className={style.faq__questionBox}>
            <span
              className={
                openAnswer === 1 ? style.faq__number_active : style.faq__number
              }
            >
              [1]
            </span>
            <p
              className={
                openAnswer === 1
                  ? style.faq__question_active
                  : style.faq__question
              }
            >
              WHAT IS AN NFT COLLECTION?
            </p>
          </div>

          {openAnswer === 1 ? (
            <p className={style.faq__answer}>
              {' '}
              An NFT collection is a group of unique digital assets, each
              represented by a non-fungible token, typically created around a
              specific theme or style.
            </p>
          ) : (
            ''
          )}
        </li>

        <li
          className={
            openAnswer === 2 ? style.faq__item_active : style.faq__item
          }
          onClick={() => setOpenAnswer(2)}
        >
          <img
            src={monkey_2}
            alt="Monkey card"
            className={
              openAnswer === 2 ? style.faq__image_active : style.faq__image
            }
          />

          <div className={style.faq__questionBox}>
            <span
              className={
                openAnswer === 2 ? style.faq__number_active : style.faq__number
              }
            >
              [2]
            </span>
            <p
              className={
                openAnswer === 2
                  ? style.faq__question_active
                  : style.faq__question
              }
            >
              HOW DO I PURCHASE NFTS FROM A COLLECTION
            </p>
          </div>

          {openAnswer === 2 ? (
            <p className={style.faq__answer}>
              To purchase nfts from a collection, you typically need to use
              cryptocurrency on a blockchain0based marketplace.
            </p>
          ) : (
            ''
          )}
        </li>

        <li
          className={
            openAnswer === 3 ? style.faq__item_active : style.faq__item
          }
          onClick={() => setOpenAnswer(3)}
        >
          <img
            src={monkey_3}
            alt="Monkey card"
            className={
              openAnswer === 3 ? style.faq__image_active : style.faq__image
            }
          />

          <div className={style.faq__questionBox}>
            <span
              className={
                openAnswer === 3 ? style.faq__number_active : style.faq__number
              }
            >
              [3]
            </span>
            <p
              className={
                openAnswer === 3
                  ? style.faq__question_active
                  : style.faq__question
              }
            >
              CAN I SELL OR TRADE NFTS FROM A COLLECTION?
            </p>
          </div>

          {openAnswer === 3 ? (
            <p className={style.faq__answer}>
              Yes, you can sell or trade NFTs from a collection like you would
              other digital assets.
            </p>
          ) : (
            ''
          )}
        </li>

        <li
          className={
            openAnswer === 4 ? style.faq__item_active : style.faq__item
          }
          onClick={() => setOpenAnswer(4)}
        >
          <img
            src={monkey_4}
            alt="Monkey card"
            className={
              openAnswer === 4 ? style.faq__image_active : style.faq__image
            }
          />

          <div className={style.faq__questionBox}>
            <span
              className={
                openAnswer === 4 ? style.faq__number_active : style.faq__number
              }
            >
              [4]
            </span>
            <p
              className={
                openAnswer === 4
                  ? style.faq__question_active
                  : style.faq__question
              }
            >
              WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
            </p>
          </div>

          {openAnswer === 4 ? (
            <p className={style.faq__answer}>
              As an NFT owner, you can own, transfer, potentially access
              exclusive content, resell, but don't automatically get copyright
              or intellectual property rights.
            </p>
          ) : (
            ''
          )}
        </li>
      </ul>
    </div>
  );
};
