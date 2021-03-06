import styled from "styled-components";

export const FirstContainer=styled.div `
background: #0c0c0c;
display:flex;
justify-content:left;
align-items:left;
padding:0 30px 20px;
height:800px;
position:relative;
z-index:1;

`
export const HeroBg=styled.div `
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;`

export const VideoBg=styled.video `
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`