import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/layout/NavBar'
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
      <h1>Whats Up</h1>
      <Landing />
      </>
    )
   
  }
}
    


export default App;
