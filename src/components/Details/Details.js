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
        <div className="center">
          {this.props.store.projectDetails.map((project) => {
            return (
              <>
                <div className="background">
                  <div className="favorite">
                    <FavoriteIcon projectId={this.props.match.params.p_id} className="favorite" />
                  </div>
                  <h2 key={project.name} className="back">{project.name}</h2>
                  <h4 className="back">{project.username}</h4>
                  <img src={project.image} height="500" max-width= "500" alt={project.name}></img>
                  <h3>Supplies:</h3>
                  <pre>{project.supplies}</pre>
                  <h3>Steps: </h3>
                  <pre>{project.description}</pre>
                </div>
              </>
            )
          })}
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(Details);