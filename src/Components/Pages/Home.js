import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import { LinkButton } from '../Layout/LinkButton'

export function Home () {
    return (
    
      <section className={styles.home_contanier}>
        <h1>Bem vindo ao  <span>Coast</span></h1>
        <p>Inice o gerenciamento dos seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Create a new Project" />
        <img src={savings}></img>
      </section>
       
    )
}