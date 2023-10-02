import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { connect, sendMsg } from "./main.tsx";

function App() {
  connect();

  return (
    <Router>
      <div className="main-div">
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </ Router>
  )
}

send() {
    console.log("hello");
    sendMsg("hello");
}

export default App
export default send
