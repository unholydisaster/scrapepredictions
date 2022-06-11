import React from "react"
import {Sidebar,Linkk,Linkli,Linka} from "./../styles/Predictionlist"
const Prediction=({employees})=>{
    return (
        <Sidebar>
                 {employees.map((pre)=> {
                   return(
          <Linkk key={pre.teams}>
            <Linkli><Linka>{pre.country}-{pre.league}</Linka></Linkli>
            <Linkli><Linka>{pre.teams}</Linka></Linkli>
            <Linkli><Linka>{pre.pick}</Linka></Linkli>
          </Linkk>                               
                   )
                })}
      </Sidebar>
    )
}
export async function getServerSideProps(){
    
    const data=await fetch(`http://localhost:3000/api/hello/`)
    const employed=await data.json()

    if(!employed){
        return {
            notFound:true
        }
    }
    return{
        props:{
            employees:employed
        }
    }
}
export default Prediction