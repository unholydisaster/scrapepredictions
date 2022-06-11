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

export async function getStaticProps(){
  const predictions=[]  
  const predictions1=[]
  
  const time=60*60*6
  try {
    const results=await axios.get('https://confirmbets.com/home/index')
    const html=await results.data;
    const $=cheerio.load(html)
    console.log($.html()) 
    
    
    $('td:contains("Vs")', html).each(function(){
      const teams=$(this).text().trim()
      const pick=$(this).next().text().trim()
     
      predictions.push({
          teams,
          pick,
    
      })
  })




  } catch (error) {
    console.log
  }

  console.log(predictions)

  return{
    props:{
      data:predictions,   
      revalidate: time,
    }
  }
}