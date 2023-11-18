import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles} from '/src/styles';
import { navLinks } from '/src/constants';
import {nishylogo, menu, close } from '/src/assets/assets';

const Navbar = () => {
   const [active, setActive] =useState('')

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
          <img src={nishylogo} alt="nishylogo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer"> Farjana Ema Nishy <span className="sm:block hidden">| Software Engineer</span>

          </p>
        </Link>
        <ul className="list-non hidden sm:flex flex-row gap-10">
          {navLinks.map((link) =>(
          <li
             key ={link.id}
             className={`${
              active === link.title
              ? "text-white"
              : "text-secondary"
             }`}
          >
            <a href = {`#${link.id}`}>{link.title}</a>
          </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default Navbar