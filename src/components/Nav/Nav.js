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
    {props.store.user.id && (
          <p>{props.store.user.username}</p>
        )}
      <Link to="/home">
        <h2 className="nav-title">YourShelf</h2>
      </Link>
      <div className="nav-right">

        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <div className="menu">
            <Menu></Menu>
          </div>
        )}
      </div>
      <div className="divider"></div>
    </div>
    
    </>
  );
};

export default connect(mapStoreToProps)(Nav);
