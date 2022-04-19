import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { dragonsApi } from "../../API"
import { AddEditContainer } from "../../containers/AddEditPages"



export const EditDragons = (props:any) => {
    const history = useHistory()
    const [name, setName] = useState<string>(props.location.state.name)
    const [type, setType] = useState<string>(props.location.state.type)
    
    const nameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const typeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value)
    }

    
    const editButtonClick = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        history.push('dragons') 
        await dragonsApi.put(`dragon/${props.location.state.id}`, {
            name:name,
            type:type,
        })
        window.location.reload()
    }

    return(
        <AddEditContainer 
            NameValue={name} 
            TypeValue={type} 
            buttonText={"Edit your dragon"} 
            onChangeName={nameHandler}
            onChangeType={typeHandler}
            name={name} 
            type={type} 
            id={props.location.state.id} 
            createdAt={props.location.state.createdAt} 
            histories={""} 
            handleRemoveClick={() => null}
            handleEditClick={() => null}
            buttonClick={editButtonClick}
        />
    )
}