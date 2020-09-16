import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
    // eslint-disable-next-line
    { this.props.history.push('/login') };
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        Profile Pic: 
        <select name="genres" onChange={this.handleGenre}>
        <option value='adventure'><img src="https://static.vecteezy.com/system/resources/thumbnails/000/184/643/small/Succulents_top_view_hand_drawn_style.jpg"></img></option>
          <option value='animated'>Animated</option>
          <option value='biographical'>Biographical</option>
          <option value='comedy'>Comedy</option>
          <option value='disaster'>Disaster</option>
          <option value='drama'>Drama</option>
          <option value='epic'>Epic</option>
          <option value='fantasy'>Fantasy</option>
        </select>
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>

      </form>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterForm));
