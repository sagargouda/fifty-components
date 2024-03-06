import React, {useEffect, useState} from 'react';
import './Color.css'
// rgb(255,0,0)
// #124245
function Color(props) {

    const [typeOfColor , setTypeOfColor] =useState('hex')

    const [color , setColor] = useState('#000000')

    function randomColor(length){
        return Math.floor(Math.random() * length)
    }
    function handleCreateRandomHex(){
           // #567123
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#";
        for(let i=0;i<6;i++){
           hexColor+= hex[randomColor(hex.length)]
        }
        // console.log(hexColor)
        setColor(hexColor)
    }
    function handleCreateRandomRGB(){
        const red = randomColor(256);
        const green = randomColor(256);
        const blue = randomColor(256);

        // Create the RGB color string
        const rgbColor = `rgb(${red},${green},${blue})`;

        // Set the color state
        setColor(rgbColor);
    }
    useEffect(()=>{
        if(typeOfColor === 'rgb'){
            handleCreateRandomRGB()
        }
        else{
            handleCreateRandomHex()
        }
    }, [typeOfColor])



    return (
        <div style={{width: '100vw' , height: '100vh' , background: color}} className="container">
        <h1>Random color generation</h1>
            <button style={{margin: '10px'}} onClick={()=>setTypeOfColor('hex')} >Create Hex Color</button>
            <button style={{margin: '10px'}} onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button style={{margin: '10px'}} onClick={typeOfColor==='hex' ? handleCreateRandomHex : handleCreateRandomRGB}>Generate Random Color</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px'
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
              <h1>{color}</h1>
            </div>

        </div>

    );
}

export default Color;