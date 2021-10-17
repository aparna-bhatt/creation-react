import React from 'react'
import Axios from "axios";
import { useEffect,useState } from 'react';

const Template1 = () => {


    useEffect(() => {

        Axios.get("http://localhost:5000/template1").then((res)=>{
            
        })
        
    }, [])
    console.log("hello")
    return (
        <div>
           hello
        </div>
    )
   
}
export default Template1;
