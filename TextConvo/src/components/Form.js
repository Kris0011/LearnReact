import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Form(props) {
    
    const changeText = (event) => {
        setText(event.target.value);
        setText2(event.target.value);
    }
    const handleReset = () => {
        setText(text2);
    }
    const toUpper = () => {
        let change = text.toUpperCase();
        setText(change);
        props.showAlert("Text changed to Uppercase", "warning");

    }
    const toLower = () => {
        let change = text.toLowerCase();
        setText(change);
        props.showAlert("Text changed to Lowercase", "warning");

    }
    const cleartext = () => {
        setText("");
        props.showAlert("Text Cleared", "danger");
    }


    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed.", "success");

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
        props.showAlert("Copied Clipboard", "success");

    }

    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    return (
        <div data-bs-theme={props.mode}>
            <div className="my-4">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={changeText} value={text} placeholder={props.title}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toUpper}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toLower}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={cleartext}>Clear</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleReset}>Reset All the Chnages</button>
            <div className=" container my-5 ">
                    <h4>Summary</h4>
                    <p>Words {text.split(/\s+/).filter((element) => { return element.length !== 0; }).length} Charactors {text.length} </p
                    ><p>Paragraphs {text.replace(/\n$/gm, '').split(/\n/).length} Sentences {text.split(". ").length} </p>
                    <p> Characters per word: {getAverageCharacterCount()}</p>   {/* filter will not count word while doing space */}
                    <h4 >Preview</h4>
                    <span>{text}</span>
            </div>

        </div>

    );
}
Form.propTypes = {
    title: PropTypes.string.isRequired,
};


