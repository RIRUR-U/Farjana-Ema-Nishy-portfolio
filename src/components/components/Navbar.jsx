import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles} from '/src/styles';
import { navLinks } from '/src/constants';
import {logo, menu, close } from '/src/assets/assets';

const Navbar = () => {
   const [setActive, setfirst] =useState('')

  return (
    <nav
       className={`${styles.paddinX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
        to="/"
        className="flex item-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>

      </div>

    </nav>
  )
}

export default Navbar