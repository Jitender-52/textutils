import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import About from './components/About';

import React, { useState } from 'react';


// let name = "World!"
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  const toggleMode = (toggleMode)=>{
    if(mode === 'light')
    {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtil - Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container" style={{color:mode=='light'?'black':'white'}}>
        <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;