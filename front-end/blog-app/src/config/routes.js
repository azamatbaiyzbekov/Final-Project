import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ProfileContainer from '../containers/ProfileContainer';


const Routes = ({ setCurrentUser, history }) => {
   return (
    <Switch>
        <Route path='/about' component ={ AboutUs} />
        <Route path='/register' component={ Register } />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} {...history} /> } />
        <Route path='/profile' component ={ ProfileContainer } />
    </Switch>
    

   )
        
    
    
    
}

export default withRouter(Routes);