import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
import { withRouter } from 'react-router-dom'

const reload = () => window.location.reload();

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      message: ''
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

    axios.post('/api/auth/login', { username, password, email })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/Dashboard/dashboard.html');
        reload()
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, email, message } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <label htmlFor="username" className ="sr-only">Username</label>
          <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange= {this.onChange} required />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-success btn-block" type="submit">Login</button>
          
        </form>
      </div>
    );
  }
}

export default withRouter(Login);