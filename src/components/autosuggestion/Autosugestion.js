import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cacheResults} from "./redux/appSlice";

function Autosuggestion(props) {
    const [ searchQuery , setSearchQuery] = useState('')
    const [ suggestions , setSuggestions] = useState([])
    const dispatch = useDispatch()
    const selector = useSelector(store=> store.app)

    useEffect(() => {
       const timer =  setTimeout(()=>{
           if(selector[searchQuery])
           {
               setSuggestions(selector[searchQuery])
           }else{
               getData()
           }
        }  , 200)

        return () => clearTimeout(timer)

    }, [searchQuery]);

    async function getData(){
        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${searchQuery}`)
        const data = await response.json()
        console.log(data[1])
        dispatch(cacheResults({
            [searchQuery]: data[1]
        }))
        setSuggestions(data[1])
    }

    return (
        <div>
          <h1>Auto suggestion</h1>
        {/*     input */}
            <input className="p-2 m-2 border-2 border-black" type="text" value={searchQuery} onChange={(e)=>{
                setSearchQuery(e.target.value)
            }}/>
            {
                suggestions.length > 0 && suggestions.map((item)=>{
                    return <p key={item}>{item}</p>
                })
            }
        </div>
    );
}

export default Autosuggestion;