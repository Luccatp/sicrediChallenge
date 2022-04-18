import { useContext } from "react"
import { DragonsContext } from "../../Contexts/DragonsContext"
import { Dragon } from "../../Interfaces"
import { DragonGist } from "../DragonGist/index.component"


export const CardList = () => {
    const {currentDragons} = useContext(DragonsContext)

    return( 
        <div>
        {currentDragons.map((dragon:Dragon) => (
            <DragonGist 
                createdAt={dragon.createdAt} 
                name={dragon.name} 
                type={dragon.type} 
                histories={dragon.histories} 
                id={dragon.id}
            />
    ))}
        </div>
    )
    
}