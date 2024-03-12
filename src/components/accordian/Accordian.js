import React, {useState} from 'react';
import {objects} from "./data";

function Accordian(props) {
    const [single , setSingle] = useState(null)
    const [ checkbox , setCheckbox] = useState(false)
   const [multi , setMulti] = useState([])
    function handleSingle(getId){
       setSingle(getId===single ? null : getId)
    }

    function handleMultiple(getId){
  let copied =  [...multi]
    //    we will find which index got clciked
        const findIndex = copied.indexOf(getId)

    //     it will say -1
        if(findIndex === -1 ){
            copied.push(getId)
        }
        else{
            // if it is already present then delete it
            copied.splice(findIndex , 1)
        }

        // set it
        setMulti(copied)
    }



    function handleChange(){
        setCheckbox(prev=>!prev)
    }


    return (
        <div className='w-2/4 h-2/4  mx-auto mt-6 text-black'>

            <h1>Multi Select Option <button onClick={handleChange}>{checkbox ? '✅' : '🔴'}</button> </h1>

            <div className="flex flex-col gap-2 text-center mt-6 ">
                {
                    objects.map((object)=>{
                        return (
                            <>
                                <div key={object.id}
                                     className="w-30 h-20 bg-gray-50 border-b-2  flex flex-row justify-around ">
                                    <h1 className="mt-6">{object.question}</h1>
                                    <button onClick={ checkbox ? () =>handleMultiple(object.id) :  () => handleSingle(object.id)}>➕</button>
                                </div>
                                {
                                    checkbox ? multi.indexOf(object.id) !== -1 && <h1>{object.answer}</h1> :

                                        single === object.id  && <h1>{object.answer}</h1>
                                }
                            </>

                        )
                    })
                }
            </div>


        </div>
    );
}

export default Accordian;