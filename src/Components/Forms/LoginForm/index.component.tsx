import { ChangeEventHandler } from "react";
import { LoginTitle } from "../../../Pages/Login/index.styles";
import { ActionButton } from "../../Buttons/ActionButton/index.component";
import { TextInput } from "../../TextInput/index.component";
import { Form } from "./index.styles";

interface FormProps {
    onSubmit:any,
    onChangeEmail:ChangeEventHandler,
    onChangePassword:ChangeEventHandler,
    emailValue:string,
    passwordValue:string
}


export const LoginForm = (props:FormProps) => (
        <Form onSubmit={props.onSubmit}>
            <LoginTitle data-testid='LoginTitle'>SICREDI <br/>DRAGONS</LoginTitle>
            <TextInput value={props.emailValue} type="email" label="Email" onChange={props.onChangeEmail} maxLength={undefined}/>
            <TextInput value={props.passwordValue} type="password" label="Senha" onChange={props.onChangePassword} maxLength={undefined}/>
            <ActionButton inverted={false} type={"submit"}>Log in</ActionButton>
        </Form>
)