import React from 'react';
import { CiStar } from "react-icons/ci";
import {useState} from "react";
import './StarRating.css'
function StarRating({noOfStars=5}) {
const [ rating ,setRating] = useState(0)
    const [ hover , setHover] = useState(0)



    function handleClick(getId){
        console.log(getId)
        setRating(getId)
    }

    function handleLeave(){

        setHover(rating)
    }

    function handleHover(getId){
        console.log(getId)
        setHover(getId)
    }

    return (
        <div style={{margin:'50px'}}>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    return <CiStar className={index <= (hover || rating) ? 'active' : 'inactive'} onMouseLeave={()=>handleLeave(index+1)} onMouseOver={()=>handleHover(index+1)} onClick={()=>handleClick(index+1)} key={index} size={44}/>
            })
            }

        </div>
    );
}

export default StarRating;