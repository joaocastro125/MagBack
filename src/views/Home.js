import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/creditCard';
import CardList from '../components/creditCard';
import CenteredButton from '../components/centerButton';
import Institucional from '../components/Institucional';
import Faq from '../components/Faq';

import posts from '../data/Posts';





const Home = () => {
    return (
      <>
        <Hero />
        <Card />
        <CardList posts={posts} />
        <CenteredButton >
          Abra a sua conta
        </CenteredButton>
        <Institucional />
        <Faq />
      </>
    )
  }
  
  export default Home;