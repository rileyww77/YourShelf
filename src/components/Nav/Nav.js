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
    <div className="nav">
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.store.user.id && (
        <div className="userName">
          <p>Hello, {props.store.user.username}!</p>
          <Menu></Menu>
        </ div>
      )}
      <div className="center">
        <Link to="/home">
          <img src='/images/DIYS-trans.png' alt='YourShelf Logo' className="logo"></img>
        </Link>
        <h5 className="inline">Design it: Yourshelf </h5>
        <h5 className="inline">Decorate it: YourShelf </h5>
        <h5 className="inline">Do it: YourShelf </h5>
      </ div>
      <div className="nav-right">
      </div>
      <div className="divider"></div>
    </div>
  );
};


export default connect(mapStoreToProps)(Nav);
