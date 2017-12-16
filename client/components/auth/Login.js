import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//import SimpleButton from './SimpleButton';
import { login} from '../../redux/reducers/coffee-api';

class Login extends Component {
  constructor(props){
    super(props);
    this.form = { style: { maxWidth: '300px'} }
  }

  onSubmit(e){
    e.preventDefault()
    login();
  }
  render() {
    return (
      <div className="mobile-container">
        <h1>Login Page</h1>
        <p className="lead"> For Coffee Fanatics</p>
        <br/>
        <form role="form" onSubmit={this.onSubmit} method="post" style={ this.form.style }>
          <div className="form-group">
            <input type="text" name="username" placeholder="Enter Username" className="form-control" /></div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" className="form-control" /></div>
          <button type="submit" className="btn btn-default">Submit</button>
          <a href="/">
            <button type="button" className="btn btn-primary">Cancel</button></a>
        </form>
      </div>
    )
  }
}

export default Login;