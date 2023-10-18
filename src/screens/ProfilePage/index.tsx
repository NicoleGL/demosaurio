import { useState } from "react";
import ProfilePopUp from "../../components/ProfilePopUp";
import SocialMediaItem from "../../components/SocialMediaItem";
import SquarePic from "../../components/SquarePic";
import styles from "./index.module.css";
import { Icon } from 'react-icons-kit';
import {ic_edit} from 'react-icons-kit/md/ic_edit'

function ProfilePage() {

    const profileData = {
        'username': 'brunoburkos',
        'image-url': null,
        'description': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'social-media': [
            {'site': 'web', 'content': 'siu.com'},
            {'site': 'facebook', 'content': ''},
            {'site': 'twitter', 'content': '@notengo'},
            {'site': 'instagram', 'content': '@noquiero'},
            {'site': 'github', 'content': 'paknamlover'}
        ]
    }

    const [background, setBackground] = useState('var(--main-bg-color)');
    const [visibility, setVisibility] = useState('none');

    function openPopup() {
        setBackground('linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))');
        setVisibility('block');
    }

    function closePopup() {
        setBackground('var(--main-bg-color)');
        setVisibility('none');
    }

    const handleCallback = () => {closePopup()}

    return(
        <div className={styles.main} style={{ 'background': background }}>
            <div className={styles.left}>
                <div className={styles["left-container"]}>
                    <SquarePic src='' width='150px' height='150px' />
                    <div>
                        <div className={`${styles.text} ${styles['username-div']}`}>
                            <h1 className={`${styles.text} ${styles.username}`}>{profileData.username}</h1>
                            <button className={styles["edit-button"]} onClick={openPopup}>
                                <Icon icon={ic_edit} size={20} />
                            </button>
                        </div>
                        
                        <p className={styles.wrap}>{profileData.description}</p>
                        <ul className={`${styles.text} ${styles.list}`}>
                            {profileData['social-media'].map(
                                (item) => <SocialMediaItem site={item.site} content={item.content} />
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.text}>Mis demos</h1>
            </div>
            <ProfilePopUp data={profileData}  isVisible={visibility} callback={handleCallback}/>
        </div>
    )
}

export default ProfilePage;