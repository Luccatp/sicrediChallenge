import { Router, Switch, Redirect} from 'react-router-dom'
import { DragonsPage } from '../Pages/Dragons/index.component'
import { LoginPage } from '../Pages/Login/index.component'
import { LoginRoute, PrivateRoute } from './DifferentRoutes'
import { createBrowserHistory } from 'history';
import { AddDragons } from '../Pages/AddDragons/index.component';

export const Routes = () => {
    const history = createBrowserHistory()
    return(
        <Router history={history}>
            <Switch>
                <LoginRoute path='/' exact component={LoginPage}/>
                <PrivateRoute path='/dragons' exact component={DragonsPage}/>
                <PrivateRoute path='/addDragons' exact component={AddDragons}/>
                <PrivateRoute path='/dragons' exact component={DragonsPage}/>
                <Redirect to={'/dragons'} path='*'></Redirect>
            </Switch>
        </Router>
    )
}