import React,{useEffect,useState} from 'react'
import {ProdCard} from './ProdCard'
export const Prod = () => {
const [item,setItem]=useState([])
useEffect(()=>{
    const getItem=async() =>{
     let response = await fetch("http://localhost:8080/deal")
     let data = await response.json()
     console.log(data)
     setItem(data)
    }
    getItem()
   
  },[])
    return (
        <>
                <div className="cartLeft">
                 {item.map((deal)=>{
                   return  <ProdCard key={deal.id} item={deal}/>
                 })}
                </div>
                </>
    )
              }