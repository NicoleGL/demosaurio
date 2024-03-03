import { Link } from "react-router-dom";
import CSS from "./index.module.css";
import sendMsg from '../../main.tsx';

type LoginProps = {
    username: string,
    password: string
}

function sendMessage(username:string, password:string) {
    sendMsg(username + ", " + password);
}

function LoginButton(props: LoginProps) {

    return (
        <Link to={"/"} className={CSS.button} onClick={() => sendMessage(props.username, props.password)}>Iniciar sesión</Link>
    );

}

export default LoginButton;