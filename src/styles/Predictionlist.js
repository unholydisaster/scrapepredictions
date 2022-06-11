import styled from "styled-components"
import Link from 'next/link'

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Sidebar=styled.div`
${mq[0,1]}{
    left:5%;
    top:50px;
    display:grid;
    background:white;
    position:absolute;
    width:90%;
    padding:20px;
    grid-gap:10px;
    grid-template-columns:repeat( 1, minmax(50px, 1fr) );
    transition: 0.9ms;
    z-index:30;
    
    }
`

export const Linkk=styled.ul`
${mq[0,1]}{
    position:relative;
    background-color:blue;
    list-style-type:none;
    margin:0;
    padding:0;
    width:100%;
    z-index:30;
}
`
export const Linkli=styled.li`
${mq[0,1]}{
font-family:Helvetica, verdana, sans-serif;
font-size:16px;
z-index:30;
position:relative;
border-bottom:2px solid black;
}
`
export const Linka=styled.a`
${mq[0,1]}{
    text-decoration:none;
    color:#000;
    display:block;
    width:100%;
    position:relative;
    left:30px;
    z-index:30;
}
`
