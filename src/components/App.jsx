import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { About } from './About/About';
import { MindMap } from './MindMap/MindMap';
import { Faq } from './FAQ/FAQ';
import { Arts } from './Arts/Arts';
import { Mint } from './Mint/Mint';
import { Footer } from './Footer/Footer';

import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <Mint />
      <Footer />
    </div>
  );
};
