import { Button } from "./index.styles";

interface ButtonProps {
    inverted:boolean,
    onClick?: any,
    type:string,
    children:string
}

export const ActionButton = (props:ButtonProps) => (
    <Button inverted = {props.inverted} onClick={props.onClick} data-testid="ActionButton">{props.children}</Button>
)