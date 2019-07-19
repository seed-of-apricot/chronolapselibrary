import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../modules/authentication/actions';

const Login = props => (
  <div>
    <h1>Login</h1>
  </div>
);

export default connect(
  state => state.authentication,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Login);
