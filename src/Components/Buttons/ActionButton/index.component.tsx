import { Button } from "./index.styles";

interface ButtonProps {
    inverted?:boolean,
    onClick?: any,
    type:string,
    children:string
    red?:boolean
}

export const ActionButton = (props:ButtonProps) => (
    <Button inverted = {props.inverted ? props.inverted : false} red={props.red ? props.red : false} onClick={props.onClick} data-testid="ActionButton">{props.children}</Button>
)