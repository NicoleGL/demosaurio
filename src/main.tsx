import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import useWebSocket from 'react-use-websocket';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

var ws = new WebSocket("ws://localhost:8080/ws");

let sendMsg = (msg) => {
    ws.send(msg);
};

export default sendMsg;

/*let connect = (socket) => {
  console.log("Conectando");

  socket.onopen = () => {
    console.log("Conectado correctamente");
  };

  socket.onmessage = msg => {
    console.log(msg);
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Soket Error: ", error);
  };
};

let sendMsg = (msg, socket) => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
*/