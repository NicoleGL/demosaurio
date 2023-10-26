import { Link } from "react-router-dom";
import styles from "./index.module.css";
import SquarePic from "../SquarePic";
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/fa/search';

type props = {
    state:number
}

function TopBar({ state }:props) {

    return (
        <div className={styles.topBar}>
            <Link to="/" className={styles.logoDiv}>
                <SquarePic src='null' width='40px' height='40px' />
            </Link>
            <Link to="/" className={(state == 1)? `${styles.navButton} ${styles.selected}` : styles.navButton}>Explorar</Link>
            <Link to="/biblioteca" className={(state == 2)? `${styles.navButton} ${styles.selected}` : styles.navButton}>Biblioteca</Link>
            <div className={styles.searchBarDiv}>
                <input type="text" placeholder="Busca..." className={styles.searchBar}/>
                <Icon icon={search} className={styles.searchIcon} />
            </div>
            <Link to="/profile" className={styles.logoDiv}>
                <SquarePic src='null' width='40px' height='40px' />
            </Link>
        </div>
    );

}

export default TopBar;