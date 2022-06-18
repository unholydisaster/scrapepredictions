const cheerio =require("cheerio")
import axios from "axios"
import React from "react"
import {Sidebar,Linkk,Linkli,Linka} from "./../styles/Predictionlist"

export default function Home({data}) {
  return (
    <div>
        <Sidebar>
                 {data.map((pre)=> {
                   return(
          <Linkk key={pre.teams} >
            <Linkli><Linka>{pre.country}-{pre.league}</Linka></Linkli>
            <Linkli><Linka>{pre.teams}</Linka></Linkli>
            <Linkli><Linka>{pre.pick}</Linka></Linkli>
          </Linkk>                               
                   )
                })}
      </Sidebar>
   </div>
  )
}

export async function getServerSideProps(){
  

const cleanpredictions=[]
  try {
    const results=await axios.get('https://confirmbets.com/home/index')
    const html=await results.data;
    const $=cheerio.load(html)
    console.log($.html()) 
    
    
    $( 'td.outcome', html).each(function(){
     const countrys=$(this).text().trim();
     const leagues=(this).next().text().trim()  
    })

    $('td:contains("Vs")', html).each(function() {
     const teams=$(this).text().trim()
     const picks=$(this).next().text().trim()
    });

  
    const map=new Map()
  map.set("data",{teams}) 

 
  const bigdata=[...map.values()]
  console.log(bigdata)

  } catch (error) {
    console.log
  }


  
  console.log

  return{
    props:{
      data:cleanpredictions|?||>,,   
    }
  }
}