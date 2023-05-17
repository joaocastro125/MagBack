
import { useState } from 'react';
import Navigation from './components/Navegation';
import Footer from './components/Footer'
import AcountModal from "./components/AcountModal";
import './App.css';
import Hero from './components/Hero';
import Home from './views/Home'



function App() {
const [showModal,setShowModal]=useState(false)
  return (
    <div className="App">
      
     <Navigation handleCreateAccount={()=>setShowModal(true)}/>
      <Home />
      <Footer />

      <AcountModal show={showModal} handleClose={()=>setShowModal(false)} />
      </div>
  );
}


export default App;









