import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Home);
