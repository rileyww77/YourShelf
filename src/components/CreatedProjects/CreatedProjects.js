import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddProjectButton from '../AddProjectButton/AddProjectButton';
import UserProjectList from '../UserProjectList/UserProjectList'


class CreatedProjects extends Component {
  state = {
    heading: 'My Projects',
  };

  componentDidMount(){
    this.getUserProjects();
  }

  getUserProjects = () => {
    this.props.dispatch({ type: 'FETCH_USER_PROJECTS', payload: this.props.store.user.id })
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <AddProjectButton />

        {this.props.store.userProjects.map((project) => {
            return (
                <div key={project.name}>
                    <UserProjectList project={project} />
                </div>
            )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreatedProjects);