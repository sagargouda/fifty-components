import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import './Star.css'
function Star({noOfStars = 5}) {
    const [rating , setRating] = useState(0);
    const [hover , setHover] =useState(0)

    function handleClick(getCurrentId){
setRating(getCurrentId)
    }
    function handleMouseEnter(getCurrentId){
    setHover(getCurrentId)
    }
    function  handleMouseLeave(){
       setHover(rating)
    }



    return (
        <div className="star-rating">
            <h1>Star rating component</h1>

            {
                [...Array(noOfStars)].map((_,index)=>{
                    // index= 1,2 ,3,4,5
                    index+=1
                    return (

                            <FaStar key={index} className={index <= (hover || rating) ? 'active' : 'inactive'} onClick={() => handleClick(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave()} size={40}/>

                    )

                })
            }
        </div>
    );
}

export default Star;