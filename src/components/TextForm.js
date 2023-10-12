import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText]=useState("");
    
    //function for UpperCase
    const UpperCase=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text has been converted to UpperCase.", "success");

    }

    //function for LowerCase
    const LowerCase=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text has been converted to LowerCase.", "success");

    }

    //function for clear all
    const Clear=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Your text has been cleared.", "success");


    }

    //function for Title Case
    const TitleCase=()=>{
        const words = text.split(' ');
        const titleCaseWords = words.map((word)=>{
            return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
        });
        const newText = titleCaseWords.join(' ');
        setText(newText);
        props.showAlert("Your text has been converted to TitleCase.", "success");

    }

    //function for copy the text
    const Copy=()=>{
        let text = document.getElementById('myform');

        text.select()
        document.execCommand('copy');
        props.showAlert("Your text has been copied.", "success");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
  return (
    
    <div>
      <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'?'#80808000':'#2b2b2e', color: props.mode === 'light'?'black':'white'}} placeholder='Enter your text here' onChange={handleOnChange} id="myform" rows="10"></textarea>
  
        </div><br />
        <div className="btn-group" >
          <button className='btn btn-outline-primary mx-2' onClick={UpperCase}>UpperCase</button>
          <button className='btn btn-outline-primary mx-2' onClick={LowerCase}>LowerCase</button>
          <button className='btn btn-outline-primary mx-2' onClick={TitleCase}>TitleCase</button>
          <button className='btn btn-outline-primary mx-2' onClick={Copy}>Copy</button>
          <button className='btn btn-outline-primary mx-2' onClick={Clear}>Clear all</button>
        </div>

      </div><br />

      <div className='container my-3' style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p><strong style={{color: '#0d6efd'}}>{text.split(" ").length-1}</strong> words and <strong style={{color: '#0d6efd'}}>{text.length} </strong>characters</p>
      </div>
    </div>



    
    
  );
}
