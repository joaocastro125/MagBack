
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Navigation from './components/Navegation';
import Footer from './components/Footer'
import AcountModal from "./components/AcountModal";

import './App.css';
import Home from './views/Home'
import Login from './views/Login';



function App() {
const [showModal,setShowModal]=useState(false)
const [name ,setName]=useState()
const [account , setAccount]=useState()
const isLogged=name && account
const fakeAuth={
  login:(name,account,cb)=>{
    setName(name)
    setAccount(account)
    setTimeout(cb,100)
  },
  logout:(cb)=>{
    setName()
    setAccount()
    setTimeout(cb,100)  
  }
}
  return (
    <div className="App">
      
     <Navigation handleCreateAccount={()=>setShowModal(true)} logged={isLogged} />
     <Routes>
        <Route path='/' element={<Home handleClick={()=>setShowModal(true)} />} />
        <Route path='/login' element={<Login auth={fakeAuth} />} />
     </Routes>
      <Footer />

      <AcountModal show={showModal} handleClose={()=>setShowModal(false)} />
      </div>
  );
}


export default App;









