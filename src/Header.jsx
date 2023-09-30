import React from 'react';
import logo192 from './Images/logo192.png';

const Header=()=>{
  return(
    <>
    <div className='header'>
        <img src={logo192} alt='logo' width='70' height='50' />
        <h1>Notes</h1>
    </div>
    </>
  )
}



export default Header;
