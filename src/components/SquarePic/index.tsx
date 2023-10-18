import styles from './index.module.css';

type props = {
    src:string,
    width:string,
    height:string
}

function SquarePic({src, width, height}:props) {

    

    return (
        <img className={styles.empty} style={{width: width, height: height}} />
    );
}

export default SquarePic;