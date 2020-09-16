import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Menu from './Menu.js'
import Avatar from '@material-ui/core/Avatar';

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
    <Grid container direction="row" justify="flex-end" alignItems="center" spacing={2}>
        <Grid item xs={6}>
          <Box>
          <Link to="/home">
            <img src='/images/Logo.png' alt='YourShelf Logo' className="logo"></img>
            </Link>
          </Box>
        </Grid>
        <Avatar alt="succelent" src="https://image.freepik.com/free-vector/gold-brush-stroke_53876-76976.jpg" />
        {props.store.user.id && (
          <Grid item>
            <Menu></Menu>
          </Grid>
        )}
    </ Grid>
    </div>
  );
};


export default connect(mapStoreToProps)(Nav);
