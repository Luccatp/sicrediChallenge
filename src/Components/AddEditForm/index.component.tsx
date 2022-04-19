import { ChangeEventHandler } from "react"
import { ActionButton } from "../ActionButton/index.component"
import { TextInput } from "../TextInput/index.component"
import { AddEditWrapper } from "./index.styles"

export interface NewDragon {
    onChangeType: ChangeEventHandler<Element>
    onChangeName: ChangeEventHandler<Element>
    TypeValue: string
    NameValue: string
    buttonText: string
}

export const AddEditForm = (props:NewDragon) => {
    return(
        <AddEditWrapper>
            <TextInput value={props.NameValue} type="email" label="Email" onChange={props.onChangeName}/>
            <TextInput value={props.TypeValue} type="password" label="Password" onChange={props.onChangeType}/>
            <ActionButton inverted={false} type={"submit"}>{props.buttonText}</ActionButton>
        </AddEditWrapper>
    )
}