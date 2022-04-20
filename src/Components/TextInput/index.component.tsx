import { ChangeEventHandler } from "react"
import { Group, Input, InputLabel } from "./index.styles"

interface InputsProps {
    maxLength: number | undefined
    value:string,
    type:string,
    label:string,
    onChange: ChangeEventHandler
}

export const TextInput = (props:InputsProps) => {
    return(
        <Group>
            <Input
                data-testid='input'
                value={props.value}
                type={props.type}
                onChange={props.onChange}
                maxLength={props.maxLength}
            />
            {props.label && <InputLabel 
                shrink={props.value.length > 0 ? true : false} 
                data-testid='inputLabel'>{props.label}</InputLabel>
            }
        </Group>
    )
}