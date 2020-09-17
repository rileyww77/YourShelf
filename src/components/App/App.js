import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import UserShelf from '../UserShelf/UserShelf'
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NewProject from '../NewProject/NewProject.js'
import Home from '../Home/Home.js'
import Details from '../Details/Details.js'
import Edit from '../Edit/Edit.js'

import './App.css';
import CreatedProjects from '../CreatedProjects/CreatedProjects';

import { createMuiTheme } from '@material-ui/core/styles';

class App extends Component {



  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });
    return (
      <theme>
      <Router>
        <div>
          <Nav />
          <Switch>
            
            
            <ProtectedRoute path="/details/:p_id" component={Details}/>
            <ProtectedRoute exact path="/edit/:p_id" component={Edit}/>
            <ProtectedRoute exact path="/newProject" component={NewProject} />
            <Route exact path="/" component={LandingPage} />
            <ProtectedRoute exact path="/home" component={Home} />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserShelf}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/userProject"
              component={CreatedProjects}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/home"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/home"
            />
            

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </theme>
    );
  }
}

export default connect()(App);
