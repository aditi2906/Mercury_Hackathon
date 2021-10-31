import React from 'react'
import { FaWindows } from 'react-icons/fa'
import styled from "styled-components";
import "./usersidebar.css"
import { Sidebardata } from './Sidebardata'


 const Sidebarcontainer=styled.div `
width:100%;
height:100%;
background-color:#fff;
margin:0;
padding:0;
`

export function Usersidebar() {
    return (
<>
<Sidebarcontainer>
<div className="Sidebar">
<ul className="SidebarList">{Sidebardata.map((val,key)=>{
    return(
     <li className="row" key={key} onClick={()=> {window.location.pathname=val.link }}> {" "}
         <div id="icon">{val.icon}</div>{" "}
         <div id="title">{val.title}</div>{" "}
     </li>)
})}</ul> </div>
</Sidebarcontainer>
        </>
    )
}


