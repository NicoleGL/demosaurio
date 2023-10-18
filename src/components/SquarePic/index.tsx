import styles from './index.module.css';

type props = {
    src:string,
    width:string,
    height:string
}

/* Imagen cuadrada. Creé un componente porque se usará en muchos sitios en la web. 
Aún no funciona con una foto de verdad. */
function SquarePic({src, width, height}:props) {

    

    return (
        <img className={styles.empty} style={{width: width, height: height}} />
    );
}

export default SquarePic;