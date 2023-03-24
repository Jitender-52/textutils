import React, {useState} from 'react'

export default function TextForm(props) {
    // let check = 0;
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase!", "success");
    };

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase!", "success");
    };

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);  
        props.showAlert("Text cleared!", "success");
    };

    const handleOnChange = (event)=>{
        // if(check= 0)
        // {
        //     event.target.value = "";
        //     check = 1;
        // }
        setText(event.target.value);
    };

    const handleCopy = ()=>{
        // var text = document.getElementById("myBox");
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    };

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join((" ")));
        props.showAlert("Extra spaces removed!", "success");
    };

    const [text, setText] = useState("");

  return (
    <>
<div className='container' style={{color:props.mode==='light'?'black':'white'}}>
    <h1 className='mb-4'> {props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control my-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} > Convert to Uppercase </button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}> Convert to Lowercase </button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}> Clear Text </button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}> Copy Text </button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}> Remove Extra Spaces </button>
</div>


<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2> Your text summary </h2>
    {/* <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p> */}
    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
    {/* <p> {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes read </p> */}
    <p> {0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} minutes read </p>
    <h2>Preview</h2>
    <p> {text.length?text:"Enter something in the textbox to preview here"} </p>
</div>
    </>
  )
}
