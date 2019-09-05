import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import ProfileContainer from '../containers/ProfileContainer';


const Routes = () => {
   return (
    <Switch>
        <Route path='/profile' component ={ ProfileContainer } />
    </Switch>
    

   )
        
    
    
    
}

export default Routes;