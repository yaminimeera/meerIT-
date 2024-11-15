import React from 'react';
import NavbarComponent from "./components/nav/NavbarComponent";
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';

const Rootlayout = () => {
  return (
    <div>
    <NavbarComponent/>
    <div  style={{minHeight:'73.5vh'}}>
    <Outlet/>
    
    </div>
    <Footer/>
    </div>
  )
}

export default Rootlayout