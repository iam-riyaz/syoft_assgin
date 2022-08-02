import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export const ProductList=()=>{


    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(({data})=>(
           setData(data)
        ))
    },[])

    console.log(data)

    return(
        <>
        <div>
            {data.map((e)=>{
                return(
                    <>
                    <div style={{width:"200px" , border:"2px solid black" ,margin:"10px"}}>
                        <img src={e.image} alt="" />
                        <h3>{e.title}</h3>
                    </div>
                    
                    </>
                )
            })}
        </div>
        </>
    )
}