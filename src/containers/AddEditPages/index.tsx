import { ChangeEventHandler } from "react";
import { AddEditForm } from "../../Components/AddEditForm/index.component";
import { AddWrapper, RightSide } from "./index.styles";

interface ContainerProps {
    NameValue:string
    TypeValue:string
    buttonText:string
    onChangeName:ChangeEventHandler
    onChangeType:ChangeEventHandler
}


export const AddEditContainer = (props:ContainerProps) => (
    <AddWrapper>
            <AddEditForm 
                NameValue={props.NameValue}
                TypeValue={props.TypeValue}
                buttonText={props.buttonText}
                onChangeName={props.onChangeName}
                onChangeType={props.onChangeType}
            />
            <RightSide></RightSide>
        </AddWrapper>
)