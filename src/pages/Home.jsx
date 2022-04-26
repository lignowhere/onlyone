import React from 'react';
import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';
import Slider02 from '../components/slider/Slider02';
import dataSlider2 from '../assets/fake-data/dataSlider2';
import BestSeller from '../components/layouts/home/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller';
import LiveAution from '../components/layouts/home/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import Create from '../components/layouts/home/Create';
import dataCreate from '../assets/fake-data/dataCreate'
import LatestCollections from '../components/layouts/home/LatestCollections';
import dataCollections from '../assets/fake-data/dataCollections'
import HotCollections from '../components/layouts/home/HotCollections';
import dataHotCollection from '../assets/fake-data/dataHotCollection';
import PopularCollection from '../components/layouts/home/PopularCollection';
import dataPopularCollection from '../assets/fake-data/dataPopularCollection';
import FooterStyle2 from '../components/footer/FooterStyle2';
import { Newsletters } from '../components/layouts/home/Newsletters';

const Home = () => {
  return <div className='home'>
      <Header />
      <Slider02 data={dataSlider2} />
      <BestSeller data={dataBestSeller} />
      <LiveAution data={dataLiveAution} />
      <Create data={dataCreate} />
      <LatestCollections data={dataCollections} />
      <HotCollections data={dataHotCollection} />
      <PopularCollection data={dataPopularCollection} />
      <Newsletters />
      <FooterStyle2 />
  </div>;
};

export default Home;
