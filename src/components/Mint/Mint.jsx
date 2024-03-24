import { Title } from 'components/Title/Title';
import validationSchema from './validationSchema';
import cross from '../../image/svg/add-sharp.svg';

import { useState } from 'react';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

import style from './Mint.module.css';
import discord from '../../image/mintIcon/discord.svg';
import metaMask from '../../image/mintIcon/metaMask.svg';

export const Mint = () => {
  const [isRequiredData, setIsRequiredData] = useState(false);

  const formik = useFormik({
    initialValues: {
      discord: '',
      walletAddress: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const user = {
        discord: values.discord,
        walletAddress: values.walletAddress,
      };

      if (user.discord !== '' && user.walletAddress) {
        setIsRequiredData(true);
        toast.success(`Minted, ${user.discord}`);
      }
    },
  });

  return (
    <div id="mint" className={style.mint__container}>
      <Title title="Are you in?" />

      <img className={style.mint__svg} src={cross} alt="cross" />

      <p className={style.mint__text}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>

      <form className={style.mint__form} onSubmit={formik.handleSubmit}>
        <div className={style.mint__inputBox}>
          <div className={style.mint__inputIcon_wrapper}>
            <img
              className={style.mint__inputIcon}
              src={discord}
              alt="discord icon"
            />
          </div>
          <input
            className={
              formik.errors.discord
                ? style.mint__form_inputError
                : `${style.mint__form_input} ${
                    formik.touched.discord &&
                    !formik.errors.discord &&
                    `${style.mint__form_inputValid}`
                  }`
            }
            id="discord"
            name="discord"
            type="discord"
            placeholder="@username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.discord}
            autoComplete="off"
          />
          {formik.touched.discord && (
            <>
              {formik.errors.discord && (
                <p className={style.mint__inputError}>
                  {formik.errors.discord}
                </p>
              )}
            </>
          )}
        </div>

        <div className={style.mint__inputBox}>
          <div className={style.mint__inputIcon_wrapper}>
            <img
              className={style.mint__inputIcon}
              src={metaMask}
              alt="MetaMask icon"
            />
          </div>
          <input
            className={
              formik.errors.walletAddress
                ? style.mint__form_inputError
                : `${style.mint__form_input} ${
                    formik.touched.walletAddress &&
                    !formik.errors.walletAddress &&
                    `${style.mint__form_inputValid}`
                  }`
            }
            id="walletAddress"
            name="walletAddress"
            type="walletAddress"
            placeholder="wallet Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.walletAddress}
            autoComplete="off"
          />
          {formik.touched.walletAddress && (
            <>
              {formik.errors.walletAddress && (
                <p className={style.mint__inputError}>
                  {formik.errors.walletAddress}
                </p>
              )}
            </>
          )}
        </div>

        <button type="submit" className={style.mint__form_btn}>
          {isRequiredData ? 'Minted' : 'Mint'}
        </button>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                width: '250px',
                background: '#DC3B5A',
                fontFamily: 'MessinaSans',
                color: '#fff',
              },
            },
          }}
        />
      </form>
    </div>
  );
};
