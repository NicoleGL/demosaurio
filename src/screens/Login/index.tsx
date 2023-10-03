import React from "react";
import CSS from './index.module.css';
import {send} from '../../App.tsx';
import sendMsg from '../../main.tsx';

function sendMessage() {
    sendMsg(username.value + ", " + password.value)
}

function LoginPage() {
    
    let username= "";
    let password = "";

    console.log(username);

    return(
        <div className={CSS["main-div"]}>
            <div className={CSS["square-box"]}>
                <h1 className={`${CSS.header} ${CSS["side-margin"]}`}>Iniciar sesión</h1>
                <form className={`${CSS["form-box"]} ${CSS["side-margin"]}`}>
                    <label htmlFor="username">Usuario:</label><br />
                    <input type="user" id="username" name="username" className={CSS["enter-text"]} /><br />
                    <label htmlFor="password">Contraseña:</label><br />
                    <input type="password" id="password" name="password" className={CSS["enter-text"]}/><br />
                    <input onClick = {sendMessage} type="submit" id="submit" value = "Iniciar sesión" name="password" className={CSS["submit-button"]} />
                </form> 
                <p className={CSS["side-margin"]}>¿No tienes cuenta? <a>Regístrate</a></p>
            </div>
        </div>
    )
}

export default LoginPage;