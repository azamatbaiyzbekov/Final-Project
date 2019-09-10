import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import Posts from '../components/Posts/Posts';

class PostsContainer extends Component {
    state = {
        posts: [],
        // title: '',
        // content: '',
        
    }


    componentDidMount() {
        axios.get(`${API_URL}/posts`, { withCredentials: true })
        .then(res=> {
            console.log(res.data.data)
            this.setState({posts: res.data.data})
        })
        .catch(err=>console.log(err))
    }

    createPost = (post) => {
        console.log(post)
        
        axios.post(`${API_URL}/posts`, post, { withCredentials: true })
        .then(res=> {
            console.log(res.data)
            // this.setState({ newPost: post })
            this.setState({ newPost: post })
        })
        .catch(err=>console.log(err))
    };




    pushNewPost = (post) => {
        const posts = this.state.posts;
        posts.push(post);
        this.setState({ posts })
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    };

    handleSubmit = event => {
        
        const newPost = {
            user: localStorage.getItem('uid'),
            title: this.state.title,
            content: this.state.content,
        }

        axios.post(`${API_URL}/posts`, newPost, {withCredentials: true})
        .then(res => {
            this.props.pushNewPost(res.data.data);
        })
        .catch(err => console.log(err));
    }


    editPost() {
        
        const post = {
            title: this.state.title,
            content: this.state.content,
            
        }
        axios.put(`${API_URL}/posts/:_id`, post)
        .then(res => console.log(res.data));
    }

   

    removePost = (id) => {
        axios.delete(`${API_URL}/posts/${id}`, { withCredentials: true })
        .then(res => {
            this.setState({
                posts: this.state.posts.filter((post) => post._id !== id )
            })
            console.log('removed');
        })
        .catch(err => console.log(err))
    }
    
    

    render() {
        // const posts = this.state.posts.map(post => {
          
        return  <Posts createPost={this.createPost} posts={this.state.posts} editPost={this.editPost} removePost={this.removePost} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
        
    
    }
    
    
};

export default PostsContainer;