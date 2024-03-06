import React, {useState , useEffect} from 'react';
import './image.css'
import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs";


function Image({url , limit = 5 , page = 1}) {
    const [ images , setImages] = useState([])
    const [currentSlide , setCurrentSlide] = useState(0)
  const [error , setError] = useState(null)
    const [loading ,setLoading] = useState(false)

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide-1)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide+1)
    }


    //  fetching fucntion

    async function fetchImages(getUrl){
        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await  response.json();

            if(data){
                setImages(data)
                setLoading(false)
            }

        }catch(e){
            console.log(e)
            setError(e.message)
            setLoading(true)
        }
    }


    useEffect(()=>{
        if(url !== "")
        {
            fetchImages(url)
        }
    } , [url])
console.log(images)

if(loading){
    return <div>Loading data wait a sec</div>
}
if(error !== null){
    return <div>Error occured</div>
}





    return (
        <div className="container">
            <h1>image slider</h1>
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length ? images.map((image,index)=>{
                    return(
                        <img className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'} key={image.id} src={image.download_url} alt={image.author}/>
                    )
                }) : null


            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length ? images.map((_,index)=>{
                        return(
                         <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"} onClick={()=>setCurrentSlide(index)}></button>
                        )
                    }) : null

                }
            </span>
        </div>
    );
}

export default Image;