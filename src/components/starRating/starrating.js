import React, {useState} from 'react';
import { CiStar } from "react-icons/ci";
import './starrating.css'

function Starrating({noOfStar = 5}) {

    const [ rating , setRating] =useState(0)
    const[hover , setHover]= useState(0)

    function handleClick(getId){
        console.log(getId)
        setRating(getId)
    }

    function handleLeave(getId){
        console.log(getId)
        setHover(rating)
    }
    function handleHover(getId){
        console.log(getId)
        setHover(getId)
    }


    return (
        <div>
            {
                [...Array(noOfStar)].map((_, index)=>{
                    return <CiStar className={index <= (hover || rating) ? 'active': 'inactive'} size={30} key={index}  onClick={()=>handleClick(index)} onMouseOver={()=>handleHover(index)} onMouseLeave={()=>handleLeave(index)} />
                })
            }
        </div>
    );
}

export default Starrating;