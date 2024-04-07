import React, {useState} from 'react';
import { CiStar } from "react-icons/ci";
import './FiveStar.css'

function Fivestar({noOfStar = 5}) {
    const [ rating , setRating] = useState(0)
    const [ hover  , setHover] = useState(0)

    function handleClick(getId){
    setRating(getId)
    }
    function handleHover(getId){
        setHover(getId)
    }

    function handleLeave(getId){
      setHover(rating)
    }

    return (
        <div>
            <h1>5 star component</h1>
            {
             [...Array(noOfStar)].map((_ , index)=>{
                 return <CiStar className={index <= (hover || rating) ? 'active' : 'inactive' } onMouseLeave={()=>handleLeave(index)} onMouseOver={()=> handleHover(index)} onClick={()=> handleClick(index)} key={index} size={30}/>
             })
            }

        </div>
    );
}

export default Fivestar;