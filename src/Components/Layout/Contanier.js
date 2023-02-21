import styles from './Contanier.module.css'

export function Contanier(props) {
return <div className={`${styles.contanier} ${styles[props.customClass]}`}> {props.children}</div>
}