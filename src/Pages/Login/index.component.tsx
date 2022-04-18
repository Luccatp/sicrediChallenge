import { TextInput } from "../../Components/TextInput/index.component"
import { LoginTitle, LoginWrapper } from "./index.styles"


export const LoginPage = () => {
    return(
        <LoginWrapper>
            <LoginTitle data-testid='LoginTitle'>LOGIN</LoginTitle>
            <TextInput value="" type="email" label="Email" onChange={() => null}/>
            <TextInput value="" type="email" label="Password" onChange={() => null}/>
        </LoginWrapper>
    )
}