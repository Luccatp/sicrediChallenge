import {Route, Redirect} from 'react-router-dom'


export const isAuthenticated = () => {
    if(window.localStorage.getItem('login') === 'true') {
        return true
    } else {
        return false
    }
}

export const PrivateRoute = ({component: Component, ...rest}:any) => {
    return( <Route {...rest} render={(props:any) => (
        isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{pathname:'/', state:{from:props.location}}}></Redirect>
        )
    )}/>
)}

export const LoginRoute = ({component: Component, ...rest}:any) => {
   return <Route {...rest} render={(props:any) => (
        isAuthenticated() ? (
            <Redirect to={{pathname:'/dragons', state:{from:props.location}}}></Redirect>
        ) : (
            <Component {...props}/>
        )
    )}/>
}