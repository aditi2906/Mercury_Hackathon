import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AccountNavbar.css';
import { FaMagento } from 'react-icons/fa';

function AccountNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <div style={{color: 'black'}}>
  <FaMagento size={32}>NFTgram</FaMagento>
</div>
               </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Return to Home
              </Link>
            </li>
          
              <Link
                to='/Footer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default AccountNavbar;