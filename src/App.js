
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import Navigation from './components/Navegation';
import Footer from './components/Footer'
import AcountModal from "./components/AcountModal";
import './App.css';
import Home from './views/Home'
import Login from './views/Login';
import Dashbord from './views/dashboard';



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

const PrivateRoute = ({ Component, logged}) => {
  return logged ? <Component name={name} account={account} /> : <Navigate to='/login' />
}

  return (
    <div className="App">
      
     <Navigation handleCreateAccount={()=>setShowModal(true)} logged={isLogged} auth={fakeAuth}/>
     <Routes>
        <Route path='/' element={<Home handleClick={()=>setShowModal(true)} />} />
        <Route path='/login' element={<Login auth={fakeAuth} />} />
        <Route path='/dashbord' element={<Dashbord />} />

        

     </Routes>
      <Footer />

      <AcountModal show={showModal} handleClose={()=>setShowModal(false)} />
      </div>
  );
}


export default App;









