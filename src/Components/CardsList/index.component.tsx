import { useContext } from "react"
import { DragonsContext } from "../../Contexts/DragonsContext"
import { Dragon } from "../../Interfaces"
import { DragonGist } from "../DragonGist/index.component"
import { CardListDiv } from "./index.styles"


export const CardList = () => {
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
            />
    ))}
        </CardListDiv>
    )
    
}