import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('Enter the text here');
    // txt = "New Text" Wrong way
    // setText("New Txt"); Right Way

    function handleUppercase(){
        setText(text.toUpperCase());
    }
    const handleOnchange = (event) =>{
        setText(event.target.value);
    }
    // function handleCapitalize(){
    //     var capitalize = text[0].toUpperCase
    //     setText(capitalize);
    // }
    function handleLowercase(){
        setText(text.toLowerCase());
    }
    function handleClrText(){
        var clrtext = "";
        setText(clrtext);
    }
    

    return (
        <>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value = {text} onChange={handleOnchange}></textarea>

                <button className="btn btn-primary" id='uppercasebtn' onClick ={handleUppercase}>Convert to Uppercase</button>
                
                {/* <button className="btn btn-primary" id='capitalizebtn' onClick ={handleCapitalize}>Capitalize the Text</button> */}

                <button className="btn btn-primary" id='lowercasebtn' onClick ={handleLowercase}>Convert to Lowercase</button>

                <button className="btn btn-primary" onClick={handleClrText}>Clear Text</button>
            </div>
            
            <div className="summary my-5">
                <h4>Your Text Summary</h4>
                <p>{text.split(" ").length} words and {text.length} charecters</p>
            </div>
            <div className="preview my-3">
                <h5>Preview of your text :</h5>
                <p>{text}</p>
            </div>

        </>
    )
}
