import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Details extends Component {
  state = {
    heading: 'details',
  };

  componentDidMount(){
    console.log(this.props.match.params.p_id)
    this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.p_id})
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Details);