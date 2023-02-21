import { useNavigate } from 'react-router-dom'
import { ProjetcForm } from '../Projects/ProjectForm'
import styles from './NewProjects.module.css'

export function NewProject () {
     
    const navigate = useNavigate()

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(project),

        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log (data)
            // redirect
            navigate('/projects', {state:{message: 'Projeto criado com sucesso!'}})
          })
          .catch(err => console.log(err))

    } 

    return (
        <div className={styles.newproject_contanier}>
        <h1>New Project</h1>
        <p>Create a new project</p>
        <ProjetcForm handleSubmit={createPost} btnText="Create a new Project" />
        </div>
    )
}