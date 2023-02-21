import styles from './Projects.module.css'

import {LinkButton} from '../Layout/LinkButton' 

import { Loader } from '../Layout/Loader'

import { ProjectCard } from '../Projects/ProjectCard'

import {Contanier} from '../Layout/Contanier'

import {useLocation} from 'react-router-dom'

import {Message} from '../Layout/Message'

import { useState, useEffect } from 'react'

export function Projects () {

    const [projects, setProjects] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')


    const location = useLocation ()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect (() => {
      setTimeout(() => {
         fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
       },
       })
       .then(resp => resp.json())
       .then(data => {
        setProjects(data)
        setRemoveLoader(true)
       })
       .catch((err) => console.log(err) )

      }, 500);
    }, [])

    function removeProject (id) {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json'       
         },
      }).then(resp => resp.json()) 
      .then(data => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Project Removed')
      })
      .catch(err => console.log(err))
    }

    return (
       <div className={styles.project_container}>
        <div className={styles.title_container} >
        <h1>Projects</h1>
        <LinkButton to="/newproject" text="Create a new Project" />
        </div>
         {message && <Message type="success" msg={message} />  }
         {projectMessage && <Message type="success" msg={projectMessage} />  }
         <Contanier customClass="start">
           {projects.length > 0 && 
            projects.map((project) => (
               <ProjectCard 
               id={project.id}
               name={project.name}
               budget={project.budget}
               category={project?.category?.name}
               key={project.id}
               handleRemove={removeProject}
            
                />
            ) )
           }
           {!removeLoader && <Loader/>}
           {removeLoader && projects.length === 0 && (
            <p>without new projects</p>
           )
            
           }
         </Contanier>
       </div>
    )
}