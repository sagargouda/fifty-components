import React, { useState } from 'react';

function Qrcode(props) {
    const [input, setInput] = useState('');
    const [generateQr, setGenerateQr] = useState(false);
    const [data, setData] = useState(null);

    function handleQr() {
        if (input.trim() === '') {
            alert('Please enter some text to generate QR code.');
            return;
        }
        const imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        setData(imgSrc);
        setGenerateQr(true);
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text for QR code"
            />
            <button onClick={handleQr}>Generate QR Code</button>

            {generateQr && data ? (
                <img src={data} alt="QR Code" />
            ) : (
                <h2>No QR code generated yet.</h2>
            )}
        </div>
    );
}

export default Qrcode;
