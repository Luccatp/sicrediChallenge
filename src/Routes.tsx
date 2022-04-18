import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { LoginPage } from './Pages/Login/index.component'

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    )
}