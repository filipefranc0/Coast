import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

export function ProjectCard ({id, name, budget, category, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
           <h4>{name}</h4>
           <p>
            <span>Budget:</span> R${budget}
           </p> 
           <p className={styles.category_text}>
            <span className={`${styles[category]}`}></span> {category}
           </p>
           <div className={styles.project_card_action}>
            
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar 
                </Link>
            <button onClick={remove}>
                <BsFillTrashFill /> Excluir
            </button>
          
           </div>
        </div>
    )
}