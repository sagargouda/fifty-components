import React, {useState} from 'react';
import Pagination from "./Pagination";

function PaginationTest(props) {

    const dummyData = Array.from({length: 100} , (_,index)=>{
        return (
            {
                id: index+1,
                products: `Products ${index+1}`
            }
        )
    })
    // console.log(dummyData)
    const [ currentPage , setCurrentPage ]=useState(1)
    const itemsPerPage = 10;
    const itemLastIndex = currentPage * itemsPerPage
    const itemFirstIndex = itemLastIndex - itemsPerPage


    function handleClick(pageNo){
        setCurrentPage(pageNo)
    }


    const pageData = dummyData.slice(itemFirstIndex , itemLastIndex)

    return (
        <div>
            <ul>
                {
                    pageData.map((page, index)=>{
                        return <li key={index}>{page.products}</li>
                    })
                }
            </ul>
            <Pagination currentPage={currentPage} onPageChange={handleClick} totalPages={Math.ceil(dummyData.length / itemsPerPage) } />
        </div>
    );
}

export default PaginationTest;