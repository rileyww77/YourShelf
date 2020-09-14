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
      <div className="center">
        {this.props.store.projectDetails.map((project) => {
          return (
            <>
              <h2 key={project.name}>{project.name}</h2>
              <h4>{project.username}</h4>
              <img src={project.image} alt={project.name}></img>
              <h3>Supplies:</h3>
              <p>{project.supplies}</p>
                <h3>Steps: </h3>
              <p>{project.description}</p>
            </>
          )
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Details);