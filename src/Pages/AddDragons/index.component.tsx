import { useContext, useState } from "react"
import { AddEditContainer } from "../../containers/AddEditPages"
import { DragonsContext } from "../../Contexts/DragonsContext"



export const AddDragons = () => {
    const {currentDragons} = useContext(DragonsContext)
    const [name, setName] = useState<string>('')
    const [type, setType] = useState<string>('')

    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleType = (e:React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value)
    }
    
    
    
    const lastId = currentDragons.sort((a, b) => a.id - b.id).slice(-1).map((dragon) => {
            let dragonId = parseInt(`${dragon.id}`)
            return dragonId + 1
        }) 

    return(
        <AddEditContainer 
            NameValue={name}
            TypeValue={type}
            buttonText={"Crie seu dragão"}
            onChangeName={handleName}
            onChangeType={handleType} 
            name={name} 
            type={type} 
            id={lastId[0]} 
            createdAt={"2022-04-18T13:16:25.072Z"} 
            histories={""}  
            handleEditClick={() => null}
            handleRemoveClick={() => null}          
          />    
    )
}