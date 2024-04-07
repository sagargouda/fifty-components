import React , {useState} from 'react';
import Pagination from "./pagination";
function Test(props) {

    const dummyData = Array.from({length: 100} , (_ , index)=>{
        return (
            {
                id: index+1,
                name: `Videos ${index+1}`
            }
        )
    })
    console.log(dummyData)

    const itemsPerPage = 10;

    const [ currentPage , setCurrentPage] = useState(1)

    const endingIndex = currentPage * itemsPerPage
    const startingIndex = endingIndex - itemsPerPage

  const allVideos = dummyData.slice(startingIndex , endingIndex)
    console.log(allVideos)


    function handleChange (page) {
      setCurrentPage(page)
    }

    return (
        <div>
            <ul>
                {
                  allVideos.map(video=>{
                      return <li key={video.id}>{video.name}</li>
                  })
                }
            </ul>
            <Pagination currentPage={currentPage} totalPage={Math.floor(dummyData.length / itemsPerPage)} onPageChange={handleChange}/>
        </div>
    );
}

export default Test;