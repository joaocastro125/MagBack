
import { useState } from 'react';
import Navigation from './components/Navegation';
import Hero from './components/Hero';
import Card from './components/creditCard'
import CardList from './components/cardList'
import Button from './components/centerButton'
import CenteredButton from './components/centerButton';
import posts from './data/Posts'
import Institucional from './components/Institucional';
import AcountModal from './components/AcountModal';
import './App.css';

function App() {
  const [showModal, setshowModal] = useState(false)

  return (
    <div className="App">
      <Navigation handleCreateAccount={()=>setshowModal(true)}/>
      <Hero />
      <Card />
      <CardList posts={posts} />



      <CenteredButton>
        Abra sua conta
      </CenteredButton>
      <Institucional />
      <AcountModal show={showModal}  handleClose={()=>setshowModal(false)}/>


    </div>
  );
}


export default App;









