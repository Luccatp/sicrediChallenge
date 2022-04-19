import React, { useState } from "react"
import { AddEditContainer } from "../../containers/AddEditPages"



export const EditDragons = (props:any) => {
    const [name, setName] = useState<string>(props.location.state.name)
    const [type, setType] = useState<string>(props.location.state.type)
    
    const nameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const typeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value)
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
        />
    )
}