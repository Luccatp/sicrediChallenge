import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { LoginForm } from "../../Components/Forms/LoginForm/index.component"
import { LoginWrapper } from "./index.styles"
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const history = useHistory()

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email === 'lucca.paradeda@sicredi.com' && password === 'Sicredi123') {
            window.localStorage.setItem('login', 'true')
            history.push('/dragons')
            
        } else {
            toast.error('Erro digite o email e senha corretos', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    return(
        <>
        <ToastContainer/>
        <LoginWrapper>     
            <LoginForm 
                onSubmit={handleSubmit} 
                onChangeEmail={handleEmailChange} 
                onChangePassword={handlePasswordChange} 
                emailValue={email} 
                passwordValue={password}/>
        </LoginWrapper>
        </>
    )
}
