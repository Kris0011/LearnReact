import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Form(props) {
    
    const changeText = (event) => {
        setText(event.target.value);
    }
    const toUpper = () => {
        let change = text.toUpperCase();
        setText(change);

    }
    const toLower = () => {
        let change = text.toLowerCase();
        setText(change);

    }
    const cleartext = () =>{
        setText("");
    }
    const handleCopy = () =>{
        var newText = text ;
        console.log(newText);
        // newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    
    const [text, setText] = useState("");
    return (
        <>
            <div className="my-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={changeText} value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={toUpper}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={toLower}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={cleartext}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            <div className="my-5">
                <div>
                    <p>Words {text.split(" ").length} and Charactors {text.length}</p>
                </div>
                <div>
                    <h4>Preview</h4>
                    <p>{text}</p>
                </div>
            </div>

        </>

    );
}
Form.propTypes = {
    title: PropTypes.string.isRequired,
};

