import { ChangeEventHandler } from "react";
import { AddEditForm } from "../../Components/AddEditForm/index.component";
import { DragonGist } from "../../Components/DragonGist/index.component";
import { Dragon } from "../../Interfaces";
import { AddWrapper, RightSide } from "./index.styles";

interface ContainerProps {
    NameValue:string
    TypeValue:string
    buttonText:string
    onChangeName:ChangeEventHandler
    onChangeType:ChangeEventHandler
}


export const AddEditContainer = (props:ContainerProps, dragonInfo:Dragon) => (
    <AddWrapper>
            <AddEditForm 
                NameValue={props.NameValue}
                TypeValue={props.TypeValue}
                buttonText={props.buttonText}
                onChangeName={props.onChangeName}
                onChangeType={props.onChangeType}
            />
            <RightSide><DragonGist createdAt={''} name={dragonInfo.name} type={dragonInfo.type} histories={dragonInfo.histories} id={dragonInfo.id}/></RightSide>
        </AddWrapper>
)