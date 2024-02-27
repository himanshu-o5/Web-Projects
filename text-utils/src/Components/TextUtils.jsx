import React, { useState } from 'react'

const TextUtils = () => {
    const [something, setSomething] = useState("");

    const handleOnUppercaseClick = () => setSomething(something.toUpperCase());
    const handleOnLowercaseClick = () => setSomething(something.toLowerCase());
    const handleOnClick = () => setSomething("");

    const handleOnChange = (event) => {
        setSomething(event.target.value);
    }


    return (
    <>
        <div className="container">
            <h2>Enter Text to Analyze</h2>
            <div className="form-floating">
                <textarea className="form-control" style={{height: "30vh"}} onChange={handleOnChange} value={something}></textarea>
            </div>    
            <div className="buttons">
                <button className="btn btn-success" onClick={handleOnUppercaseClick}>Uppercase</button>
                <button className="btn btn-success" onClick={handleOnLowercaseClick}>Lowercase</button>
                <button className="btn btn-success" onClick={handleOnClick}>Clear</button>
            </div>
        </div>  
    </>
  )
}

export default TextUtils
