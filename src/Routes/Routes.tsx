import {BrowserRouter, Switch, Redirect} from 'react-router-dom'
import { LoginPage } from '../Pages/Login/index.component'
import { LoginRoute, PrivateRoute } from './PrivateRoutes'

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <LoginRoute path='/' exact component={LoginPage}/>
                <PrivateRoute path='/dragons' exact component={LoginPage}/>
                <Redirect to={'/'} path='*'></Redirect>
            </Switch>
        </BrowserRouter>
    )
}