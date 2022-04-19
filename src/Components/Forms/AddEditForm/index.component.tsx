import { ChangeEventHandler } from "react"
import { ActionButton } from "../../Buttons/ActionButton/index.component"
import { TextInput } from "../../TextInput/index.component"
import { AddEditWrapper } from "./index.styles"

export interface NewDragon {
    onChangeType: ChangeEventHandler<Element>
    onChangeName: ChangeEventHandler<Element>
    TypeValue: string
    NameValue: string
    buttonText: string
    buttonClick:any
}

export const AddEditForm = (props:NewDragon) => {
    return(
        <AddEditWrapper>
            <TextInput value={props.NameValue} type="text" label="Nome" onChange={props.onChangeName}/>
            <TextInput value={props.TypeValue} type="text" label="Tipo" onChange={props.onChangeType}/>
            <ActionButton inverted={false} type={"submit"} onClick={props.buttonClick}>{props.buttonText}</ActionButton>
        </AddEditWrapper>
    )
}