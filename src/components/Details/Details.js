import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Details extends Component {
  state = {
    heading: 'details',
  };

  componentDidMount() {
    console.log(this.props.match.params.p_id)
    this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.p_id })
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {this.props.store.projectDetails.map((project) => {
          return (
            <>
              <p key={project.name}>{project.name}</p>
              <p>{project.username}</p>
              <img src={project.image} alt={project.name}></img>
              <p>{project.supplies}</p>
              <p>{project.description}</p>
            </>
          )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Details);