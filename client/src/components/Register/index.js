import React, { Component } from 'react';
import axios from 'axios';
import '../Login/style.css';
import { withRouter } from 'react-router-dom'

class Create extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, email } = this.state;

    axios.post('/api/auth/register', { username, password, email })
    
      .then((result) => {
        console.log(result);
        alert(result.data.msg);
        this.props.history.push('/');
      })
      
  }
  

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Register</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-success btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);