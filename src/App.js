// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from "react";

// let name = "World!"
function App() {
  const [mode, setMode] = useState("light");  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      // document.title = "TextUtil - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      // document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <div className="container"style={{ color: mode === "light" ? "black" : "white" }}>
          {/* <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert}></TextForm>
          <About></About> */}

          <Routes>
            <Route path="/" element={<TextForm heading={"Try TextUtils - Word Counter, Character Counter, Remove extra spaces"} mode={mode} showAlert={showAlert} /> } ></Route>
            <Route path="/about" element={<About mode={mode}/>}> </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
