import React from "react";
import LoginCSS from './index.module.css';

function LoginPage() {


    return(
        <div className={LoginCSS.main}>
            <div className={LoginCSS.square}>
                <h1 className={LoginCSS.header}>Iniciar sesión</h1>
                <form className={LoginCSS["form-box"]}>
                    <label for="username">Usuario:</label><br />
                    <input type="user" id="username" name="username" className={LoginCSS["enter-text"]} /><br />
                    <label for="password">Contraseña:</label><br />
                    <input type="password" id="password" name="password" className={LoginCSS["enter-text"]}/><br />
                    <input type="submit" id="submit" name="password" value="Iniciar sesión" className={LoginCSS["submit-button"]} />
                </form> 
                <p>¿No tienes cuenta? <a>Regístrate</a></p>
            </div>
        </div>
    )
}

export default LoginPage;