import styles from './index.module.css';
import { Icon } from 'react-icons-kit';
import {twitter} from 'react-icons-kit/entypo/twitter';
import {instagram} from 'react-icons-kit/entypo/instagram';
import {facebook} from 'react-icons-kit/entypo/facebook';
import {github} from 'react-icons-kit/icomoon/github';
import {globe} from 'react-icons-kit/entypo/globe';

type props = {
    site:string,
    content:string
}


function SocialMediaItem({site, content}:props) {
    if(content == '') return;

    const icons = {
        'web': globe,
        'facebook': facebook,
        'twitter': twitter,
        'instagram': instagram,
        'github': github
    }

    return (
        <li>
            <Icon icon={icons[site]} className={styles.icon} />
            {content}
        </li>
    );
}

export default SocialMediaItem;