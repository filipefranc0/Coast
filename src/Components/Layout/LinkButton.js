import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'
export function LinkButton ({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

/*
lembre que as props em quantidades superior a 1 devem estar envelopadas em {}
*/