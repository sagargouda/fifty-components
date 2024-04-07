import React, {useState} from 'react';

function QrCode(props) {
    const [qrInput , setQrInput] = useState('')
    const [img , setImg] = useState(null)
    const [ loading , setLoading] = useState(false)


    async  function handleSubmit(){
        try{
            setLoading(true)
            const imageSource = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`)
         console.log(imageSource.url)
          setImg(imageSource.url)
            setLoading(false)
        }
        catch(err){
            alert(err)
        }
      }


    return (

        <div>
            <h1>Qr Code Component</h1>
            <input value={qrInput} onChange={(e)=>{
                setQrInput(e.target.value)
            }} type="text" className="m-2 p-2 border-2 border-black"/>
            <button onClick={handleSubmit} className="m-2 p-2 bg-blue-200 rounded-full">Submit</button>

            {
                loading === true ? <h1>laoding</h1>: <img src={img} alt=""/>
            }

        </div>
    );
}

export default QrCode;