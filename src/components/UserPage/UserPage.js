import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProjectButton from '../AddProjectButton/AddProjectButton'
import mapStoreToProps from '../../redux/mapStoreToProps';



class UserPage extends Component {

  handleClick = () => {
    this.props.history.push('/newProject')
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <AddProjectButton />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
