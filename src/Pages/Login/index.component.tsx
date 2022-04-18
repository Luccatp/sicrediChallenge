import React, { useEffect, useState } from "react"
import { LoginForm } from "../../Components/LoginForm/index.component"
import { LoginWrapper } from "./index.styles"


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
            console.log('error')
        }
    }

    return(
        <LoginWrapper>
            <LoginForm 
                onSubmit={handleSubmit} 
                onChangeEmail={handleEmailChange} 
                onChangePassword={handlePasswordChange} 
                emailValue={email} 
                passwordValue={password}/>
        </LoginWrapper>
    )
}