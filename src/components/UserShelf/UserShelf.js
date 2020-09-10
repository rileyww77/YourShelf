import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UserShelfItem from '../UserShelfItem/UserShelfItem.js';
import UserPage from '../UserPage/UserPage.js'


class UserShelf extends Component {
  

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({ type: 'FETCH_FAVORITES', payload: this.props.store.user.id })
  }

  render() {
    return (
      <div>
        <UserPage />
        {this.props.store.favorite.map((project) => {
          return (
            <div key={project.name}>
              <UserShelfItem project={project} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserShelf);