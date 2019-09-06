import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';

import ProfileContainer from '../containers/ProfileContainer';


const Routes = () => {
   return (
    <Switch>
        <Route path='/about' component ={ AboutUs} />
        <Route path='/profile' component ={ ProfileContainer } />
    </Switch>
    

   )
        
    
    
    
}

export default Routes;