import { Link } from "react-router-dom";
import CSS from "./index.module.css";
import sendMsg from '../../main.tsx';

function sendMessage(username, password) {
    sendMsg(username.value + ", " + password.value);
}

function NavButton(username, password) {

    return (
        <Link to={"/"} className={CSS.button} onClick={() => sendMessage(username,password)}>Iniciar sesión</Link>
    );

}

export default NavButton;