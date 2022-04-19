import { AddEditForm } from "../../Components/AddEditForm/index.component"
import { AddWrapper, RightSide } from "./index.styles"



export const AddDragons = () => {
    return(
        <AddWrapper>
            <AddEditForm 
                NameValue="" 
                TypeValue=""
                buttonText="Add dragon"
                onChangeName={() => null}
                onChangeType={() => null}
            />
            <RightSide></RightSide>
        </AddWrapper>
        
    )
}