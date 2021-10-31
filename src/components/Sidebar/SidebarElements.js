import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
 
export const SidebarContainer=styled.aside`
position:fixed;
z-index:1000;
width:100%;
height:100%;
background:#000;
display:grid;
align-items:center;
top:0;
left:0;
top:0;
transition:0.3s ease-in-out;
opacity:${({isOpen}) =>(isOpen ? '100%' : '0')};
top:${({isOpen})=>(isOpen ? '0' : '-100%')}; }
`
export const SidebarMenu=styled.ul `
display:grid;
grid-template-coloumns: 40fr;
grid-template-rows:repeat(6,60px);
text-align:center;
justify-content:center;

@media screen (max-width:480px){
    grid-template-rows: repeat(6,20px);
}`;

export const CloseIcon =styled(FaTimes)`
color:#fff;
`

export const Icon=styled.div `
position:absolute;
top:1.2rem;
right:1.5rem;
bakcground:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

export const SidebarWrapper=styled.div `
color:#fff;`
export const SidebarLink=styled(LinkS)`
display:flex;
algn-items:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;


&:hover{
    color:#01bf71;
    transition:0.3s ease-in-out;
}
`

export const SidebtnWrap=styled.div `

display:flex;
justify-content:center;
text-align:center;
margin-left: auto;
  margin-right: auto;`

export const SidebarRoute=styled(LinkR) `
border-radius:50px;
background:#01bf81;
white-space:nowrap;
color:#016060;
padding:16px 46px;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
justify-content:center;

&:hover{
    transition:0.2s ease-in-out;
    background:#fff;
    color:#010606;

}

`
function SidebarElements() {
    return (
        <div>
            
        </div>
    )
}

export default SidebarElements

