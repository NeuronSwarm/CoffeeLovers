import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SimpleForm from './SimpleForm';
//import SimpleButton from './SimpleButton';
import { login} from '../../redux/reducers/coffee-api';

class Login extends Component {
  constructor(props){
    super(props);
    this.form = { style: { maxWidth: '300px'} }
  }

  render() {
    return (
      <div className="mobile-container">
        <h1>Login Page</h1>
        <p className="lead"> For Coffee Fanatics</p>
        <br/>
        <SimpleForm >
          <button type="submit" className="btn btn-default">Submit</button>
          <button type="button" className="btn btn-primary">Cancel</button>
        </ SimpleForm >
      </div>
    )
  }
}

export default Login;