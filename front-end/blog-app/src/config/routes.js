import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ProfileContainer from '../containers/ProfileContainer';


const Routes = ({ setCurrentUser, history, currentUser }) => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => {
            return currentUser
            ? <Component {...props} />
            : <Redirect to='/login' />
        }} />

    )
    
    return (
    <Switch>
        
        <Route path='/register' component={ Register } />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} history={history} /> } />
        <PrivateRoute path='/about' component ={ AboutUs } />
        <PrivateRoute path='/profile' component ={ ProfileContainer } />
    </Switch>
    

   );
        
    
    
    
};

export default withRouter(Routes);