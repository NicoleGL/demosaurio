import TopBar from "../../components/TopBar";
import styles from "./index.module.css"


function Home() {


    return(
        <div className={styles.all}>
            <TopBar state={1} />
            <div className={styles.main}>
            </div>
        </div>
    )
}

export default Home;