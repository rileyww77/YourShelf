import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UserShelfItem from '../UserShelfItem/UserShelfItem.js';
import UserPage from '../UserPage/UserPage.js'

import '../card.css'

class UserShelf extends Component {


  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.props.dispatch({ type: 'FETCH_FAVORITES', payload: this.props.store.user.id })
  }

  

  render() {
    return (
      <>
        <UserPage />
        <div className="card">
          {this.props.store.favorite.map((project, i) => {
            return (
              <div key={i} className="cardItems">
                <UserShelfItem project={project} />
              </div>
            )
          })}
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(UserShelf);