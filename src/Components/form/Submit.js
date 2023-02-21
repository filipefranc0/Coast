import styles from './Submit.module.css'

export function Submit ({text}) {
    return (
        <>
        <button className={styles.btn}>{text}</button>
        </>
    )
}