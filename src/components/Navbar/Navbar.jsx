import React, { useContext, useState } from 'react';

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo2.png';
import LanguageContext from '../../Context/LanguageContext';
import './navbar.css';

const Navbar = () => {
    const[toggleMenu, setToggleMenu] = useState(false); 
    const[hide, setHide] = useState(false);

    const { textData, switchEs, switchEn } = useContext(LanguageContext);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHide(false) 
      } else {
        setHide(true)
      }
      prevScrollpos = currentScrollPos;
    }

    return(
      <nav className={hide ? 'app__navbar app__navbar-hide' : 'app__navbar'}>
        <div className='app__navbar-logo'>
          <a href='#home'><img src={logo} alt='app logo' /></a>         
        </div>
        <div className='app__navbar-container_links'>
          <ul className='app__navbar-links'>
            <li className='p__title'><a href='#about'>{textData.nav.item1}</a></li>
            <li className='p__title'><a href='#projects'>{textData.nav.item2}</a></li>
            <li className='p__title'><a href='#contact'>{textData.nav.item3}</a></li>
            <div />
            <li className='p__title' onClick={switchEn}>{textData.nav.item4}</li>
            <p className='p__title'>/</p>
            <li className='p__title' onClick={switchEs}>{textData.nav.item5}</li>
          </ul>
        </div>       
        <div className='app__navbar-smallScreen'>
          {toggleMenu
          ? <RiCloseLine color='fff' size={27} onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line color='fff' size={27} onClick={()=>setToggleMenu(true)}/>
          } 
          {toggleMenu &&(
          <div className='app__navbar-smallScreen_container'>
            <ul className='app__navbar-links'>
              <li className='p__title'><a href='#about' onClick={()=>setToggleMenu(false)}>{textData.nav.item1}</a></li>
              <li className='p__title'><a href='#projects' onClick={()=>setToggleMenu(false)}>{textData.nav.item2}</a></li>
              <li className='p__title'><a href='#contact' onClick={()=>setToggleMenu(false)}>{textData.nav.item3}</a></li>
              <div />
              <li className='p__title' onClick={switchEn}>{textData.nav.item4}</li>
              <p className='p__title'>/</p>
              <li className='p__title' onClick={switchEs}>{textData.nav.item5}</li>
            </ul>
          </div>
          )}
        </div>
      </nav>
    )
}

export default Navbar