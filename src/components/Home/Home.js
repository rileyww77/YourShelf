import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProjectList from '../ProjectList/ProjectList.js';
import UserPage from '../UserPage/UserPage.js'


class Home extends Component {
  

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({ type: 'FETCH_PROJECTS' })
  }

  render() {
    return (
      <div>
        <UserPage />
        {this.props.store.projects.map((project) => {
          return (
            <div key={project.name}>
              <ProjectList project={project} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Home);


