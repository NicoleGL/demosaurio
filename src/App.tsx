import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { connect, sendMsg } from "./main.tsx";
import ProfilePage from './screens/ProfilePage/index.tsx';

function App() {
  //connect(socket);

  return (
    <Router>
      <div className="main-div">
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/profile' element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </ Router>
  )
};

/*
 export function send() {
    console.log("hello");
    sendMsg("hello");
};
*/
export default App