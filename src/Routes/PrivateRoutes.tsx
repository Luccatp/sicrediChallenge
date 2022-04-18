import { Component, useEffect } from "react"
import {Route, Redirect} from 'react-router-dom'


const isAuthenticated = () => {
    if(window.localStorage.getItem('authenticated')) {
        return true
    } else {
        return false
    }
}

export const PrivateRoute = ({component: Component, ...rest}:any) => {
        useEffect(() => {isAuthenticated()},[])
    return( <Route {...rest} render={(props:any) => (
        isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{pathname:'/', state:{from:props.location}}}></Redirect>
        )
    )}/>
)}

export const LoginRoute = ({component: Component, ...rest}:any) => (
    <Route {...rest} render={(props:any) => (
        isAuthenticated() ? (
            <Redirect to={{pathname:'/dragons', state:{from:props.location}}}></Redirect>
        ) : (
            <Component {...props}/>
        )
    )}/>
)