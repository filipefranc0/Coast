import { Link } from "react-router-dom"
import { Contanier } from "./Contanier"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

export function Navbar () {
    return (
     <nav className={styles.navbar}>
     <Contanier>
      <Link to="/">
        <img src={logo}/>
      </Link>
       <ul className={styles.list}>
        <li className={styles.item}>
        <Link to='/'>Home</Link>
        </li>
        <li className={styles.item}>
        <Link to='/Projects'>Projetos</Link>
        </li>
        <li className={styles.item}>
        <Link to='/Company'>Company</Link>
        </li>
       </ul>
     </Contanier>
     </nav>
    )
}