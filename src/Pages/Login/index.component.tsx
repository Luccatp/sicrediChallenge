import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { LoginForm } from "../../Components/LoginForm/index.component"
import { LoginWrapper } from "./index.styles"
import 'react-toastify/dist/ReactToastify.css'

export const LoginPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(email === '123@1' && password === 'Sicredi123') {
            window.localStorage.setItem('authenticated', 'authenticated')
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