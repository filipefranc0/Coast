import {parse, v4 as uuidv4} from 'uuid'

import styles from './Project.module.css'

import { json, useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { Loader } from '../Layout/Loader'
import { Contanier } from '../Layout/Contanier'
import { ProjetcForm } from '../Projects/ProjectForm'
import { Message } from '../Layout/Message'
import { ServiceForm } from '../service/ServiceForm'

export function Project () {


    const {id} = useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState (false)
    const [showServiceForm, setShowServiceForm] = useState (false)
    const [message, setMessage] = useState()
    const [type, setType] = useState ()

    useEffect (() => { 

       setTimeout(() =>{fetch(`http://localhost:5000/projects/${id}`, {
         method:"GET",
         headers: {
           'Content-Type': 'application/json'
         },

      })
      .then((resp) => resp.json())
      .then((data) => {
       setProject(data)
      })
      .catch(err => console.log(err))
},2000)
    }, [id])


    function editPost (project) {
      setMessage('')
      //budget validation

      if(project.budget < project.cost) {
         setMessage(' You cannot do this service you do not have enough budget')
         setType('err')
         return false
      }

      fetch(`http://localhost:5000/projects/${project.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(project),
      })
      .then(resp => resp.json())
      .then((data) => {
         setProject(data)
         setShowProjectForm(false)
         setMessage('Project Updated')
         setType('success')
      })
      .catch(err => console.log(err))

    }

    function createService (project) {

      // last service
      const lastService = project.services[project.services.length - 1 ]

      lastService.id = uuidv4()

      const lastServiceCost = lastService.cost

      const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

      // maximun value validation
      if (newCost > parseFloat(project.budget)) {
         setMessage('This service is higher than your budget')
         setType('err')
         project.services.pop()
         return false
      }

      project.cost = newCost
      
      fetch(`http:/localhost:5000/projects/${project.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(project),
      })
      .then((resp) => resp.json())
      .then((data) => {

    })
      .catch(err => console.log(err))

    }
     
    function toggleProjectForm () {

      setShowProjectForm(!showProjectForm)

    }

    function toggleServiceForm () {

      setShowServiceForm(!showServiceForm)

    }


    return (
      <>
      {project.name ? (
       <div className={styles.project_details}>
         <Contanier customClass="colum">
            {message && <Message type={type} msg={message}/> }
            <div className={styles.details_container}>
               <h1>Project: {project.name}</h1>
               <button className={styles.btn} onClick={toggleProjectForm}>
                  {!showProjectForm ? 'Edit' : 'close'}
                  </button>
                  {!showProjectForm ? (
                     <div  className={styles.project_info}>
                        <p>
                           <span>category:</span> {project.category.name}
                        </p>
                        <p>
                           <span>Budget:</span> ${project.budget}
                        </p>
                        <p>
                           <span>Budget spended:</span> ${project.cost}
                        </p>
                     </div>
                  ) : (
                     <div className={styles.project_info}>
                        <ProjetcForm handleSubmit={editPost} btnText="Finish" projectData={project} />
                     </div>
                  )}
                <div className={styles.service_form_container}>
                  <h2> Add new service</h2>
                  <button className={styles.btn} onClick={toggleServiceForm}>
                  {!showServiceForm ? 'Add' : 'close'}
                  </button>
                  <div className={styles.project_info}>
                     {showServiceForm && (<ServiceForm
                     handleSubmit={createService}
                     btnText="Add service"
                     projectData={project}
                     />)}
                  </div>
                </div>
            </div>
            <div className={styles.service_form_container_services}>
              <h2>
               service
            </h2>
            <Contanier customClass="start">
               <p>serviços</p>
            </Contanier> 
            </div>
            
         </Contanier>
       </div> 
        ):(
         <Loader/>
       )} 
      </>
      
     
       
    )
}