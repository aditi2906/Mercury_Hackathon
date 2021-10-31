import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavIcon,
  NavItem,
  NavBtn,
  NavLinks,
  NavBtnLink
} from './AccountNavbarElements';

export function AccountNavbar({toggle}) {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/Home" >
            <NavIcon />
              NFTgram
            </NavLogo>
           <MobileIcon onClick={toggle}>
             <FaBars/>
           </MobileIcon>
            <NavMenu >
            <NavItem>
                <NavLinks to="Home" >
                  Return to Home
                </NavLinks>
              </NavItem>
              </NavMenu>
              <NavBtn>
               <NavBtnLink to="contact"  fontBig primary>Contact Us</NavBtnLink>
              </NavBtn> 
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}