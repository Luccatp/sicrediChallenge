import { ActionButton } from "../ActionButton/index.component"
import { DivHeader, HeaderTitle } from "./index.styles"

interface HeaderProps {
    onClick: any
}

export const Header = (props:HeaderProps) => {
    return(
        <DivHeader>
            <HeaderTitle>SICREDI DRAGONS</HeaderTitle>
            <ActionButton inverted onClick={props.onClick} type={"button"}>Log Out</ActionButton>
        </DivHeader>
    )
}