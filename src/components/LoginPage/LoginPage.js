import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

import { withRouter } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            New User? Register here!
          </button>
        </center>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(LoginPage));
