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


    const [text, setText] = useState("Enter the text here");

  return (
    <>
<div>
    <h1> {props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick} > Convert to Uppercase </button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick}> Convert to Lowercase </button>
    <button className='btn btn-primary mx-1' onClick={handleClearClick}> Clear text </button>
</div>

<div className="container my-3">
    <h2> Your text summary </h2>
    <p> {text.split(" ").length} words and {text.length} characters </p>
    <p> {0.008 * text.split(" ").length} minutes read </p>
    <h2>Preview</h2>
    <p> {text} </p>
</div>
    </>
  )
}
