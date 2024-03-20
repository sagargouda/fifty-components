import {data} from "./data";

import React, {useState} from 'react';

function Accordian(props) {
    const [ singleSelect , setSingleSelect] = useState(null)

    function handleClick(getId){
        // console.log(getId)
        setSingleSelect(singleSelect === getId ? null : getId)
    }


    return (
        <div>
            <h1>This is Accordian component</h1>
             <div style={{backgroundColor:'gray',  width: '50%' , height: '50%' , margin: "0 auto"}}>
                 <ul>
                     {
                         data.map((item , index)=>{
                             return (
                                     <div key={index}>
                                     <li onClick={()=>handleClick(index)}>{item.question}</li>>
                                         {
                                             singleSelect===index && <li>{item.answer}</li>
                                         }

                                         </div>
                             )
                         })
                     }

                 </ul>

             </div>
        </div>
    );
}

export default Accordian;