import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import './News.css';



class News extends Component {
  state = {
    hackerNews: [],
  };

  // LET COMPONENT MOUNT TO DOM
  // THEN GET DATA FROM API AND SET STATE WITH RESPONSE DATA
  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`, { withCredentials: false })
    .then(res=> {
    console.log(res.data)
      this.setState({hackerNews: res.data.slice(0, 20)})
      // console.log(this.state)
    })
    .catch(err=>console.log(err))
  }

  render() {

     const listOfNews = this.state.hackerNews.map(news => {
       return (
         <div key="stories">
           <h4 key="title">{news}</h4>
           <p key="content">{news}</p>
         </div>
       )
     })
     return (
       <div key="main">
         <h1 key="news">News</h1>
         { listOfNews }
       </div>
     );
    
  };
};

export default News; 