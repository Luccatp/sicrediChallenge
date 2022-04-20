import { ChangeEventHandler, MouseEventHandler } from "react";
import { AddEditForm } from "../../Components/Forms/AddEditForm/index.component";
import { DragonGist } from "../../Components/Cards/DragonGist/index.component";
import { AddEditWrapper, RightSide } from "./index.styles";

interface ContainerProps {
    NameValue:string
    TypeValue:string
    buttonText:string
    onChangeName:ChangeEventHandler
    onChangeType:ChangeEventHandler
    name:string
    type:string
    id:number
    createdAt:string
    histories:string
    handleRemoveClick: MouseEventHandler<HTMLButtonElement>;
    handleEditClick: MouseEventHandler<HTMLButtonElement>;
    buttonClick:any
}


export const AddEditContainer = (props:ContainerProps) => (
    <AddEditWrapper>
            <AddEditForm 
                NameValue={props.NameValue}
                TypeValue={props.TypeValue}
                buttonText={props.buttonText}
                onChangeName={props.onChangeName}
                onChangeType={props.onChangeType}
                buttonClick={props.buttonClick}
            />
            <RightSide>
                <DragonGist 
                    createdAt={props.createdAt} 
                    name={props.name} 
                    type={props.type} 
                    histories={props.histories} 
                    id={props.id} 
                    handleEditClick={props.handleEditClick}
                    handleRemoveClick={props.handleRemoveClick}
                />
            </RightSide>
        </AddEditWrapper>
)