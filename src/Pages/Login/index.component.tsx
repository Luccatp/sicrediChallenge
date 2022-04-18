import { LoginForm } from "../../Components/LoginForm/index.component"
import { LoginTitle, LoginWrapper } from "./index.styles"


export const LoginPage = () => {
    return(
        <LoginWrapper>
            <LoginTitle data-testid='LoginTitle'>SICREDI <br/>DRAGONS</LoginTitle>
            <LoginForm/>
        </LoginWrapper>
    )
}