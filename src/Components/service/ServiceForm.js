import { useState } from 'react'

import { Input } from '../form/Input'

import { Submit } from '../form/Submit'

import styles from './Serviceform.module.css'

export function ServiceForm ({handleSubmit, btnText, projectData}) {


    const [service, setSercice] = useState ([])
     

    function submit (e) {
        e.preventDefault ()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    function  handleChange (e) {
      setSercice({...service, [e.target.name]: e.target.value})


    }

    return (

        
        <form onSubmit={submit} className={styles.form}  >
        <Input
        type="text"
        text="Name of service"
        name="name"
        placeholder="name of this service"
        handleOnChange={handleChange}
        />
        <Input
        type="number"
        text="service budget"
        name="cost"
        placeholder="total"
        handleOnChange={handleChange}
        />
        <Input
        type="text"
        text="description"
        name="description"
        placeholder="service description"
        handleOnChange={handleChange}
        />
        <Submit text={btnText} />
       </form>  
        
    )

}