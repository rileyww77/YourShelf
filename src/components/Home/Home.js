import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProjectList from '../ProjectList/ProjectList.js'
import AddProjectButton from '../AddProjectButton/AddProjectButton';


class Home extends Component {
  state = {
    heading: 'Home',
  };

  componentDidMount(){
      this.getProjects();
  }

  getProjects = () => {
      this.props.dispatch({ type: 'FETCH_PROJECTS' })
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <AddProjectButton />
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


