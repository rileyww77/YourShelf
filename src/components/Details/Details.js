import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FavoriteIcon from './FavoriteIcon.js';
import './Details.css'


class Details extends Component {
  

  componentDidMount() {
    console.log(this.props.match.params.p_id)
    this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.p_id })
  }

  render() {
    return (
      <>
      <div className="favorite">
      <FavoriteIcon projectId={this.props.match.params.p_id} />
      </div>
      <div className="center">
        {this.props.store.projectDetails.map((project) => {
          return (
            <>
              <h2 key={project.name} className="back">{project.name}</h2>
              <h4 className="back">{project.username}</h4>
              <img src={project.image} alt={project.name}></img>
              <h3>Supplies:</h3>
              <pre>{project.supplies}</pre>
                <h3>Steps: </h3>
              <pre>{project.description}</pre>
            </>
          )
        })}
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(Details);