import { ButtonsDiv, EditButton, RemoveButton } from "./index.components"

interface CardButtonsProps {
    handleEditClick:React.MouseEventHandler<HTMLButtonElement>
    handleRemoveClick:React.MouseEventHandler<HTMLButtonElement>
}

export const CardButtons = (props:CardButtonsProps) => {
    return(
        <ButtonsDiv>
        <EditButton
            className="editButton"
            onClick={props.handleEditClick} 
            data-testid="Edit"
            >Editar
        </EditButton>
        <RemoveButton
            className="removeButton" 
            onClick={props.handleRemoveClick} 
            data-testid="Remove"
            >Remover
        </RemoveButton>
    </ButtonsDiv>
    )
}