import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/layout/NavBar'
import Routes from './config/routes'
import Landing from './pages/Landing';



import './App.css';



class App extends Component {
  state = {
    currentuser: localStorage.getItem('uid')
  };

  render() {
    return (
      <>
      <NavBar />
      <Routes />
     
      </>
    )
   
  }
}
    


export default App;
