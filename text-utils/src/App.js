import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextUtils from './Components/TextUtils'; 


function App() {
    const [mode, setMode] = useState({
        currMode: "light",
        changedMode: "dark",
        style: {
            backgroundColor: "white",
            color: "black"
        }
    });
    
    const toggleMode = () => {
        if(mode.changedMode === "dark"){
            document.body.style.backgroundColor = 'rgb(34, 45, 55)';
            document.body.style.color = "white";
            setMode({
                currMode: "dark",
                changedMode: "light",
                style: {
                    backgroundColor: "rgb(30, 37, 43)",
                    color: "white"
                }
            })
        }
        else{
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setMode({
                currMode: "light",
                changedMode: "dark",
                style: {
                    backgroundColor: "white",
                    color: "black"
                }
            })
        }
    }


    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <TextUtils mode={mode} toggleMode={toggleMode}/>
        </>
    );
}

export default App;

