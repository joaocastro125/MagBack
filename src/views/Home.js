import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/creditCard';
import CardList from '../components/creditCard';
import CenteredButton from '../components/centerButton';
import Institucional from '../components/Institucional';
import Faq from '../components/Faq';

import posts from '../data/Posts';


const Home = ({handleClick}) => {
    return (
      <>
        <Hero  onClick={handleClick} />
        <CardList posts={posts} />
        <CenteredButton  onClick={handleClick}>
          Abra a sua conta
        </CenteredButton>
        <Institucional  onClick={handleClick} />
        <Faq />
      </>
    )
  }
  
  export default Home;