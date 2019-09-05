import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../pages/Profile';

class ProfileContainer extends Component {
    state = {
            username: '',
            email: '',
            join_date: '',
            place_of_birth: '',
            occupation: '',





    };

    render() {
        return <Profile />
    }
};



export default ProfileContainer;