import React from "react";
import CSS from './index.module.css';

function LoginPage() {


    return(
        <div className={CSS["main-div"]}>
            <div className={CSS["square-box"]}>
                <h1 className={`${CSS.header} ${CSS["side-margin"]}`}>Iniciar sesión</h1>
                <form className={`${CSS["form-box"]} ${CSS["side-margin"]}`}>
                    <label for="username">Usuario:</label><br />
                    <input type="user" id="username" name="username" className={CSS["enter-text"]} /><br />
                    <label for="password">Contraseña:</label><br />
                    <input type="password" id="password" name="password" className={CSS["enter-text"]}/><br />
                    <input type="submit" id="submit" name="password" value="Iniciar sesión" className={CSS["submit-button"]} />
                </form> 
                <p className={CSS["side-margin"]}>¿No tienes cuenta? <a>Regístrate</a></p>
            </div>
        </div>
    )
}

export default LoginPage;