import { useState } from "react";
import styles from './index.module.css'; //Cambiado porque CSS es palabra reservada
import {send} from '../../App.tsx';
import LoginButton from "../../components/LoginButton/index.tsx";
import { Icon } from 'react-icons-kit'
import {eye } from 'react-icons-kit/entypo/eye';
import {withLine} from 'react-icons-kit/entypo/withLine';


function LoginPage() {
    //useState() almacena y permite modificar el usuario, la contraseña, 
    //el icono del ojo y la visibilidad de la contraseña
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(withLine);

    //Alterna la visibilidad de la contraseña y el icono del ojo.
    //Se llama cuando se pulsa e icono del ojo
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
        <div className={styles["main-div"]}>
            <div className={styles["square-box"]}>

                <h1 className={`${styles.header} ${styles["side-margin"]}`}>Iniciar sesión</h1>

                <form className={`${styles["form-box"]} ${styles["side-margin"]}`}>
                    <label htmlFor="username" className={styles.labels}>Usuario:</label>
                    <input type="user" id="username" name="username" value={user} className={`${styles["enter-text"]} ${styles.inputs}`}
                            onChange={(e) => setUser(e.target.value)} />

                    <label htmlFor="password" className={styles.labels}>Contraseña:</label>
                    <input type={type} name="password" value={password} className={`${styles["enter-text"]} ${styles.inputs}`}
                            onChange={(e) => setPassword(e.target.value)} />
                    {/* Icono de ver la contraseña */}
                    <Icon icon={icon} className={styles["eye-icon"]} onClick={showPassword}/>

                    {/* Botón de iniciar sesión */}
                    <LoginButton username={user} password={password} />
                </form> 

                <p className={styles["side-margin"]}>¿No tienes cuenta? <a>Regístrate</a></p>

            </div>
        </div>
    )
}

export default LoginPage;