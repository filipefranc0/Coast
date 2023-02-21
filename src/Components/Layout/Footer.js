import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export function Footer () {
    return (
       <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
             <FaFacebook />
            </li>
            <li>
               <FaInstagram/>    
            </li>
            <li>
                <FaLinkedin/>
            </li> 
            <li>
                <p><a>site pessoal</a></p>
            </li> 
        </ul>
        <p className={styles.copy_right}>
            <span>React Projects</span> &copy; 2023
        </p>
       </footer>
    )
} 