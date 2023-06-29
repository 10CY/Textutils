// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import React,{useState} from 'react';
import Alert from './componets/Alert';
import About from './componets/About';
import {BrowserRouter, Routes, Route,} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode ==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  <BrowserRouter>
  <Navbar title = "TextUtils" mode ={mode} toggleMode = {toggleMode}/>
  <Alert alert ={alert}/>
  <div className="container my-3"></div>
  <Routes>
      <Route exact path="/"  element = {<About mode ={mode}/>}/>
      <Route exact path="/TextForm" element = { <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode ={mode}/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
