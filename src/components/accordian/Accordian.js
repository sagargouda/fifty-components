import React, {useState} from 'react';
import {data} from '../accordian/data'

function Accordian(props) {
    const [single , setSingle] = useState(null)

    function handleChange(getId) {
        setSingle(single === getId ? null : getId)
    }
    
    
    return (
        <div>
            <h1>Accordian</h1>
            <div className="w-[60%] h-auto m-2 p-2 mx-auto bg-yellow-400 ">
                {
                    data.length > 0 && data.map((item)=>{
                        return(
                            <div onClick={()=>handleChange(item.id)} key={item.id} className="w-[40%] m-2 p-2 mx-auto bg-blue-200">
                              <p>{item.question}</p>
                                {
                                    single === item.id && <p>{item.answer}</p>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Accordian;