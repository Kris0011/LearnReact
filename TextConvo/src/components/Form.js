import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Form(props) {

    const changeText = (event) => {
        setText(event.target.value);
    }
    const toUpper = () => {
        let change = text.toUpperCase();
        setText(change);
        props.showAlert("Text changed to Uppercase","warning");
        
    }
    const toLower = () => {
        let change = text.toLowerCase();
        setText(change);
        props.showAlert("Text changed to Lowercase","warning");
        
    }
    const cleartext = () => {
        setText("");
        props.showAlert("Text Cleared","danger");
    }
  

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed.","success");

    }
    const getCharacterCountPerWord = () => {
        const words = text.split(" ");
        const characterCounts = words.map((word) => word.length);
        return characterCounts;
    };

    const getAverageCharacterCount = () => {
        const characterCounts = getCharacterCountPerWord();
        const totalCharacters = characterCounts.reduce(
          (sum, count) => sum + count,
          0
        );
        const average = totalCharacters / characterCounts.length;
        return isNaN(average) ? 0 : average.toFixed(2);
      }; 
      const handleCopy = () => {
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.execCommand("copy");
        props.showAlert("Copied Clipboard","success");

    }

    const [text, setText] = useState("");
    return (
        <div className="container" data-bs-theme={props.mode}>
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
                <div className="container">
                    <h4>Summary</h4>
                    <p>Words {text.split(" ").length} </p>
                    <p>Charactors {text.length}</p>
                    <p>Paragraphs {text.replace(/\n$/gm, '').split(/\n/).length}</p>
                    <p>Sentences {text.split(". ").length - 1} </p>
                    <p>Characters per word: {getAverageCharacterCount()}</p>
                    {/* <p>Unique Words {wordCount({text})}</p> */}
                    <h4>Preview</h4>
                    <p>{text}</p>
                </div>
                    
            </div>

        </div>

    );
}
Form.propTypes = {
    title: PropTypes.string.isRequired,
};

