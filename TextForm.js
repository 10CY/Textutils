import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("On clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase!","success");
    }
    const handleloClick =()=>{
        // console.log("On clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowercase!","success");
    }
    const handleClearClick =()=>{
        // console.log("On clicked");
        let newText = ''
        setText(newText) 
        props.showAlert(" Text clear!","success");
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied!","success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);

    }
    const[text, setText] =useState('Enter text here2');
  return (
    <>
    <div className='container ' style = {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className={`mb-3 `} >
            <textarea className={`form-control bg-${props.mode}`} value={text} onChange={handleOnChange} style = {{color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container" style = {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
