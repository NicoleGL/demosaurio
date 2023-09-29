import React from "react";
import './index.module.css';

function LoginPage() {


    return(
        <div className="main">
            <h1>Iniciar sesión</h1>
            <form>
                <label for="username">Usuario:</label><br />
                <input type="user" id="username" name="username" /><br />
                <label for="password">Contraseña:</label><br />
                <input type="password" id="password" name="password" /><br />
                <input type="submit" id="submit" name="password" value="Iniciar sesión" />
            </form> 
            <p>¿No tienes cuenta? <a>Regístrate</a></p>
        </div>
    )
}

export default LoginPage;