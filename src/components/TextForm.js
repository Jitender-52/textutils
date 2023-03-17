import React, {useState} from 'react'

export default function TextForm(props) {

    // let check = 0;

    const handleUpClick = ()=>{
        console.log("on click handleUpClick");
        let newText = text.toUpperCase();
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
<div>
    <h1> {props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control my-3" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick} > Convert to Uppercase </button>
</div>
  )
}
