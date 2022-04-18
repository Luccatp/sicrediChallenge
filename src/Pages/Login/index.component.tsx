import { ActionButton } from "../../Components/ActionButton/index.component"
import { TextInput } from "../../Components/TextInput/index.component"
import { LoginTitle, LoginWrapper } from "./index.styles"


export const LoginPage = () => {
    return(
        <LoginWrapper>
            <LoginTitle data-testid='LoginTitle'>LOGIN</LoginTitle>
            <TextInput value="" type="email" label="Email" onChange={() => null}/>
            <TextInput value="" type="email" label="Password" onChange={() => null}/>
            <ActionButton inverted={false} type={"submit"}></ActionButton>
        </LoginWrapper>
    )
}