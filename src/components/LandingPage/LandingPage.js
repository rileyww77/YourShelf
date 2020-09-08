import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import LoginPage from '../LoginPage/LoginPage.js';

class LandingPage extends Component {
  state = {
    heading: 'YourShelf',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Welcome to YourShelf, the platform for DIYers and creatives alike, where you can create,
              share, and view projects with millions across the globe! Get excited to do it YourShelf!
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <LoginPage />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
