import {useEffect, useState} from "react";

export default function useLocalStorage(key , defaultValue){

   const [ value , setValue] = useState(()=>{
       let currentValue;
       try{
           // getting from local storage
           currentValue = JSON.parse(localStorage.getItem(key))
       }catch(err){
           console.log(err)
           currentValue = defaultValue
       }

       return currentValue
   })


    useEffect(()=>{
   localStorage.setItem(key , JSON.stringify(value))
    } , [key , value])

return [ value , setValue]


}