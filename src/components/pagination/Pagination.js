import React, {useState} from 'react';
import './Pagination.css'
function Pagination({currentPage,totalPages=10 , onPageChange}) {
    function generatePages(){
        let pages  = [];
        for(let i =1;i<totalPages;i++){
            pages.push(i)
        }
        return pages
    }


    return (
        <div>
            <button disabled={currentPage===1} onClick={()=>{
                onPageChange(currentPage-1)
            }}>Prev</button>
            {
                generatePages().map((pageNo , index)=>{
                    return <button key={index} onClick={()=>onPageChange(pageNo)}>{pageNo}</button>
                })
            }
            <button disabled={currentPage===10} onClick={()=>{
                onPageChange( currentPage+1)
            }}>Next</button>
        </div>
    );
}

export default Pagination;