import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import './App.css';

function App(){
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  
  
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2b2e';
      showAlert('Dark mode has been enabled.', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled.', 'success')

    }
  }

  return (
    
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <div className='container my-3' >
        <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
      </div>
    </div>  
    
    
    
  );
    
}


export default App;
