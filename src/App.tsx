import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

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

export default App
