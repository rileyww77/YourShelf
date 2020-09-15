import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Menu from './Menu.js'

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/home';
    loginLinkData.text = 'Home';
  }

  return (
    <>
      <div className="nav">
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <div className="userName">
            <p>Hello, {props.store.user.username}!</p>
            <Menu></Menu>
          </div>
        )}
        <div className="logoDiv">
          <Link to="/home">
            <img src='/images/DIYS-trans.png' alt='YourShelf Logo' className="logo"></img>
          </Link>
        </div>
        <div className="tagline">
          <h5>Design it: Yourshelf &nbsp;&nbsp;&nbsp; Decorate it: YourShelf &nbsp;&nbsp; &nbsp;Do it: YourShelf </h5>
        </div>
      </div>
    </>
  );
};


export default connect(mapStoreToProps)(Nav);
