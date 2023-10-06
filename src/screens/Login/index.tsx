import { useState } from "react";
import CSS from './index.module.css';
import {send} from '../../App.tsx';
import NavButton from "../../components/NavButton";
import { Icon } from 'react-icons-kit'
import {eye } from 'react-icons-kit/entypo/eye';
import {withLine} from 'react-icons-kit/entypo/withLine';


function LoginPage() {

    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(withLine);

    const showPassword = () => {
        if (type==='password'){
            setIcon(eye);
            setType('text');
        } else {
           setIcon(withLine);
           setType('password');
        }
    }

    return(
        <div className={CSS["main-div"]}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
            <div className={CSS["square-box"]}>
                <h1 className={`${CSS.header} ${CSS["side-margin"]}`}>Iniciar sesión</h1>
                <form className={`${CSS["form-box"]} ${CSS["side-margin"]}`}>
                    <label htmlFor="username">Usuario:</label>
                    <input type="user" id="username" name="username" value={user} className={CSS["enter-text"]}
                            onChange={(e) => setUser(e.target.value)} />
                    <label htmlFor="password">Contraseña:</label>
                    <input type={type} name="password" value={password} className={CSS["enter-text"]}
                            onChange={(e) => setPassword(e.target.value)} />
                    <Icon icon={icon} className={CSS["eye-icon"]} onClick={showPassword}/>
                    <NavButton username={user} password={password} />
                </form> 
                <p className={CSS["side-margin"]}>¿No tienes cuenta? <a>Regístrate</a></p>
            </div>
        </div>
    )
}

export default LoginPage;