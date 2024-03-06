import './accordian.css'
import {useState} from "react";
import data from "./data";


function Accordian(props) {
    const [selected ,setSelected] = useState(null)
    const [multiSelection ,setMultiSelection] = useState(false)
    const [multiple ,setMultiple]=useState([])

    function handleSingle(getCurrentId){
  // console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMulti(getCurrentId){
    let copyMultiple = [...multiple ]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1){
            copyMultiple.push(getCurrentId)
        }
        else{
            copyMultiple.splice(findIndexOfCurrentId , 1)
        }

        setMultiple(copyMultiple)
    }



    return (
        <div className="acc-wrapper">

            <button onClick={()=>setMultiSelection(!multiSelection)}>Enable Multi Selection</button>


       <div className="accordian">
           {
               data && data.length > 0 ?
                   data.map((dataItem)=>{
                       return <div className="item">
                           <div className="title" onClick={
                               multiSelection ? ()=>handleMulti(dataItem.id) :
                               ()=>handleSingle(dataItem.id)}>
                               <h3>{dataItem.question}</h3>
                               <span>✅</span>
                           </div>
                           {
                               multiSelection ? multiple.indexOf(dataItem.id) !== -1 &&
                                   <div className="acc-content">{dataItem.answer}</div> : selected === dataItem.id &&
                                   <div className="acc-content">{dataItem.answer}</div>
                           }
                       </div>
                   })


                   : <div>No data present</div>
           }
       </div>
        </div>
    );
}

export default Accordian;