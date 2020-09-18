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
              
              
              <Route 
              //this is the first page the user will see. It is not protected
              exact path="/" 
              component={LandingPage} 
              />

              <ProtectedRoute 
              //if logged in, shows the details page for a specific project
              path="/details/:p_id" 
              component={Details} 
              />

              <ProtectedRoute 
              //if logged in, shows the edit form for a specific projet
              exact path="/edit/:p_id" 
              component={Edit} 
              />

              <ProtectedRoute 
              //if logged in shows creating a new project form
              exact path="/newProject" 
              component={NewProject} 
              />


              <ProtectedRoute
                //logged in users shows home page
                exact path="/home"
                component={Home}
              />


              <ProtectedRoute
                // logged in shows users favorited projects
                exact
                path="/user"
                component={UserShelf}
              />

              <ProtectedRoute
                // logged in shows users created projects
                exact
                path="/userProject"
                component={CreatedProjects}
              />

              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/home"
                // - else shows LoginPage at /login
                exact
                path="/login"
                component={LoginPage}
                authRedirect="/home"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/home"
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
