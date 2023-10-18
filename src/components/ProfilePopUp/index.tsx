import styles from './index.module.css';
import { useState } from "react";

type props = {
    'data': {
        'username': string,
        'image-url': any,
        'description': string,
        'social-media': {site: string; content: string; }[]
    },
    'isVisible': string,
    'callback': any
}


function ProfilePopUp(props: props) {
    const { data, isVisible, callback } = props;
    const [username, setUsername] = useState(data.username);
    const [description, setDescription] = useState(data.description);
    const [web, setWeb] = useState(data["social-media"][0].content);
    const [facebook, setFacebook] = useState(data["social-media"][1].content);
    const [twitter, setTwitter] = useState(data["social-media"][2].content);
    const [instagram, setInstagram] = useState(data["social-media"][3].content);
    const [github, setGithub] = useState(data["social-media"][4].content);


    return (     
        <div className={styles.main} style={{ 'display':isVisible }}>
            <h1 className={styles.text}>Editar perfil</h1>
            <form className={styles.grid}>
                <label className={styles.text} htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label className={styles.text} htmlFor="description">Descripción:</label><br />
                <textarea className={styles.description} id="description" maxLength={200} 
                          value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <label className={styles.text} htmlFor="web">Página web personal:</label>
                <input type="text" id="web" value={web} onChange={(e) => setWeb(e.target.value)}/>

                <label className={styles.text} htmlFor="facebook">Facebook:</label>
                <input type="text" id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)}/>

                <label className={styles.text} htmlFor="twitter">Twitter:</label>
                <input type="text" id="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)}/>

                <label className={styles.text} htmlFor="instagram">Instagram:</label>
                <input type="text" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)}/>

                <label className={styles.text} htmlFor="github">Github:</label>
                <input type="text" id="github" value={github} onChange={(e) => setGithub(e.target.value)}/>

            </form>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={callback}>Cancelar</button>
                <button className={styles.button} onClick={callback}>Guardar</button>
            </div>
        </div>
    );
}

export default ProfilePopUp;