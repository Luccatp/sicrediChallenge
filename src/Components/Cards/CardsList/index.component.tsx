import { MouseEventHandler, useContext } from "react"
import { DragonsContext } from "../../../Contexts/DragonsContext"
import { Dragon } from "../../../Interfaces"
import { DragonGist } from "../DragonGist/index.component"
import { CardListDiv } from "./index.styles"

interface CardListProps {
    handleRemoveClick: MouseEventHandler<HTMLButtonElement>
    handleEditClick: MouseEventHandler<HTMLButtonElement>
}

export const CardList = (props:CardListProps) => {
    const {currentDragons} = useContext(DragonsContext)

    return( 
        <CardListDiv>
        {currentDragons.map((dragon:Dragon) => (
            <DragonGist 
                key={dragon.id}
                createdAt={dragon.createdAt} 
                name={dragon.name} 
                type={dragon.type} 
                histories={dragon.histories} 
                id={dragon.id}
                handleEditClick={props.handleEditClick}
                handleRemoveClick={props.handleRemoveClick}
            />
    ))}
        </CardListDiv>
    )
    
}