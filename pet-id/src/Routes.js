import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/settings">
                    <Home/>
                </Route>
                <Route path="/sign-up">
                    <SignUp/>
                </Route>
                <Route path="/search">
                    <Home/>
                </Route>
                <Route path="/pet-info">
                    <Home/>
                </Route>
                <Route path="/pet-locale">
                    <Home/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;