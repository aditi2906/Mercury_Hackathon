import React,{useState} from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Navbar} from '../Navbar/index'
import Sidebar from '../Sidebar';
import ParticleBackground from '../Header/ParticleBackground';
import InfoSection from '../infosection';
import { homeObjOne, homeObjTwo } from '../infosection/Data';
import Footer from '../Footer/Footer';
import Upcoming from '../Upcoming';




export default function Home() {
const [isOpen,setIsOpen]=useState(false)

const toggle =() =>{
    setIsOpen(!isOpen)
}

    return (
        <>
       <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <ParticleBackground/>
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Upcoming/>
           <Router><Footer/></Router>
            
       
      
        
        </>
    )
}


