import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

import { Container } from '../../golablStyles';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky; 
  top: 0;
  z-index: 10;


  @media screen and (max-width: 960px){
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index:1;
  width:100%;
  padding:0 24px;
  max-width:1100px;
  
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left:24 px;
  font-weight:bold;
`;

// // export const NavIcon = styled(FaMagento)`
// //   margin-right: 0.5rem;
// // `;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right:-22px;
  @media screen and (max-width: 768px) {
 display:none;
  
  }
  &:hover{
    border-bottom:3px solid: #01bf71;
  }
`;

export const NavItem = styled.li`
height: 80px;
&:hover{
border-bottom:2px solid: #01bf71;}
  
`;



export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
 cursor:pointer;
  &.active{
      border-bottom:3px solid: #01bf71;
  }
  &.hover{
    border-bottom:3px solid: #01bf71;
  }

  }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center; 
    @media (max-width: 480px) {
  display: none !important;
  }
`;

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background: #e2f6ff; 
white-space:nowrap;
padding:10px 22px;
color: #010606;
font-size:16px;
outline:none;
border:none;
curson:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2 ease-in-out;
    background:#010606;
    color:#fff;
    border-bottom:3px solid: #01bf71;
}
@media (max-width: 980px) {
  display: none!important;
  }
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;