import { ActionButton } from "../ActionButton/index.component"
import { ButtonDiv, DivHeader, HeaderTitle, TitleDiv } from "./index.styles"

interface HeaderProps {
    onClick: any
}

export const Header = (props:HeaderProps) => {
    return(
        <DivHeader>
            <TitleDiv>
                <HeaderTitle>SICREDI DRAGONS</HeaderTitle>
            </TitleDiv>
            <ButtonDiv>
                <ActionButton red onClick={props.onClick} type={"button"}>Log Out</ActionButton>
            </ButtonDiv>
        </DivHeader>
    )
}