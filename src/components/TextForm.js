import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =() =>{
        // console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick =() =>{
      // console.log("UpperCase was Clicked");
      let newText = text.toLowerCase();
      setText(newText)
  }

  const handleclrClick =() =>{
    // console.log("UpperCase was Clicked");
    let newText = "";
    setText(newText)
  }

    const handleOnChange =(event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("")
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleclrClick} >Clear Text</button>
    </div>

    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecter</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
