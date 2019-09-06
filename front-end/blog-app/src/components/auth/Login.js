import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: null,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
      const userInfo = {
          email: this.state.email,
          password: this.state.password
      }

      axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
          .then(res => {
              this.props.setCurrentUser(res.data.id, res.data.username);
              this.props.history.push('/about')
          })
          .catch(err => {
              console.log(err)
      });
  };

    render() {
        return (
    <div className me="row">
        
        <section id="login" className="col-md-6 offset-md-3">
        { this.state.error }
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="example@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary float-right">Login</button>
          </form>
        </section>
    </div>
        );
    };
};


export default Login;