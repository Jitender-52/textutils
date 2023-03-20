import React, {useState} from 'react'

export default function TextForm(props) {

    // let check = 0;

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleUpClick = ()=>{
        console.log("on click handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);  
    };

    const handleOnChange = (event)=>{
        console.log("on change");
        // if(check == 0)
        // {
        //     event.target.value = "";
        //     check = 1;
        // }
        setText(event.target.value);
    };

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join((" ")));
    };

    const [text, setText] = useState("");

  return (
    <>
<div>
    <h1> {props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control my-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick} > Convert to Uppercase </button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick}> Convert to Lowercase </button>
    <button className='btn btn-primary mx-1' onClick={handleClearClick}> Clear Text </button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}> Copy Text </button>
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}> Remove Extra Spaces </button>
</div>

<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2> Your text summary </h2>
    <p> {text.split(" ").length} words and {text.length} characters </p>
    <p> {0.008 * text.split(" ").length} minutes read </p>
    <h2>Preview</h2>
    <p> {text.length?text:"Enter something in the textbox to preview here"} </p>
</div>
    </>
  )
}
