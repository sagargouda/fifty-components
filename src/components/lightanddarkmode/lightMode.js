import React from 'react';
import './lightmode.css'
import useLocalStorage from "./useLocalStorage";

function LightMode(props) {
    const [ theme , setTheme] = useLocalStorage('theme' , 'dark')

    function handleChange() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    return (
        <div className="light-dark-mode" data-theme={theme}>
            <h1>light mode and dark mode</h1>
            <button onClick={handleChange} className="m-2 p-2 rounded-b bg-blue-200">Toggle Switch</button>
        </div>
    );
}

export default LightMode;