import React, {useEffect, useState} from 'react';
import './LoadMore.css'

function LoadMore(props) {
    const [ loading , setLoading] = useState(false)
    const [ items , setItems ] = useState([])
  const [ count ,setCount] = useState(0)
    useEffect(()=>{
        getData()
    } , [count])

    async function getData(){
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count=== 0 ? 0 : count * 20}`)
        const data = await response.json()

        if(data && data.products && data.products.length){
            setItems(prevData => [...prevData,...data.products])
            setLoading(false)
        }
        console.log(data)
    }

    if(loading){
       return <div>Loading data wait</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    items && items.length  ?
                        items.map((item)=>{
                            return <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt="item"/>
                           <p>{item.title}</p>
                            </div>
                        })


                        : null
                }
            </div>
            <div className="button-container">
                <button onClick={()=>{
                    setCount(count+1)
                }}>Load more Products</button>
            </div>
        </div>
    );
}

export default LoadMore;