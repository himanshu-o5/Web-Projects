import React, { useState } from 'react'

const TextUtils = (props) => {
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
            <h1>Enter Text to Analyze</h1>
            <div className="form-floating">
                <textarea className="form-control my-4" style={{height: "30vh", ...props.mode.style}} onChange={handleOnChange} value={something}></textarea>
            </div> 

            <div className="buttons">
                <button className="btn btn-success mx-2" onClick={handleOnUppercaseClick}>Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleOnLowercaseClick}>Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleOnClick}>Clear</button>
            </div>

            <div className='my-5 mx-3'>
                <h2>Text Details</h2>
                {something.trim() ? <p>{`Your text has ${something.trim().split(' ').length} words and ${something.length} characters`}</p> : <p>Enter something for the details</p>}
            </div>
        </div>  
    </>
  )
}

export default TextUtils
