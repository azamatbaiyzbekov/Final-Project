import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Routes from './config/routes'
import { API_URL } from './constants';

import './App.css';



import './App.css';



class App extends Component {
  state = {
    currentuser: localStorage.getItem('uid'),
  }

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId )
    this.setState({ currentuser: userId });
  }

  handleLogout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
      .then(() => {
        this.setState({ currentuser: null });
        this.props.history.push('/login');
      });
  };

  render() {
    return (
      <>
      <NavBar logout={this.handleLogout} currentuser={this.state.currentuser} />
      <div className="container">
        <Routes setCurrentUser={this.setCurrentUser} />
      </div>
     
      </>
    );
   
  };
};
    


export default withRouter (App);
