import { Link } from "react-router-dom";
import styles from "./index.module.css";
import SquarePic from "../SquarePic";
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/fa/search';

//El state corresponde al boton seleccionado (Explorar o Biblioteca)
type TopBarProps = {
    state: 1|2
}

function TopBar({ state }:TopBarProps) {

    return (
        <div className={styles.topBar}>
            {/* Logo de la pagina web */}
            <Link to="/" className={styles.logoDiv}>
                <SquarePic width='40px' height='40px' />
            </Link>

            {/* Botones a Explorar y Biblioteca */}
            <Link to="/" className={(state == 1)? `${styles.navButton} ${styles.selected}` : styles.navButton}>Explorar</Link>
            <Link to="/biblioteca" className={(state == 2)? `${styles.navButton} ${styles.selected}` : styles.navButton}>Biblioteca</Link>
            
            {/* Barra de busqueda */}
            <div className={styles.searchBarDiv}>
                <input type="text" placeholder="Busca..." className={styles.searchBar}/>
                <Icon icon={search} className={styles.searchIcon} />
            </div>

            {/* Perfil del usuario con su foto de perfil */}
            <Link to="/profile" className={styles.logoDiv}>
                <SquarePic width='40px' height='40px' />
            </Link>
        </div>
    );

}

export default TopBar;