import { ActionButton } from "../ActionButton/index.component";
import { TextInput } from "../TextInput/index.component";
import { FormWrapper } from "./index.styles";



export const LoginForm = () => (
    <FormWrapper>
        <TextInput value="" type="email" label="Email" onChange={() => null}/>
        <TextInput value="" type="email" label="Password" onChange={() => null}/>
        <ActionButton inverted={false} type={"submit"}></ActionButton>
    </FormWrapper>
)