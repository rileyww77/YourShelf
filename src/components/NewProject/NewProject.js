import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class NewProject extends Component {
  state = {
    heading: 'New Project',
  };

  render() {
    return (
      <>
        <div>
          <h2>{this.state.heading}</h2>
        </div>
        Project Name:
        <br />
        <input placeholder="project name"></input>
        <br />
        Image URL (show the world your finished product!):
        < br />
        <input placeholder="image URL"></input>
        <br />
        Supplies Needed:
        <br />
        <textarea placeholder="supplies"></textarea>
        <br />
        Steps:
        <br />
        <textarea placeholder="steps"></textarea>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewProject);