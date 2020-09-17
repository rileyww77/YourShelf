import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './Edit.css'


class Edit extends Component {


  handleNameChange = (event) => {
    this.props.dispatch({ type: 'EDIT_NAME', payload: event.target.value })
  }

  handleImageChange = (event) => {
    this.props.dispatch({ type: 'EDIT_IMAGE', payload: event.target.value })
  }

  handleSupplyChange = (event) => {
    this.props.dispatch({ type: 'EDIT_SUPPLY', payload: event.target.value })
  }

  handleStepChange = (event) => {
    this.props.dispatch({ type: 'EDIT_DESCRIPTION', payload: event.target.value })
  }

  handleSubmit = () => {
    console.log('clicked')
    this.props.dispatch({ type: 'PUT_UPDATES', payload: this.props.store.edit })
    this.props.history.push('/userProject')
  }

  componentDidMount() {
    console.log(this.props.match.params.p_id)
    this.props.dispatch({ type: 'FETCH_EDITS', payload: this.props.match.params.p_id })
  }

  render() {
    return (
      <>
        <div className="center">
          Project Name:
            <br />
          <input value={this.props.store.edit.name} onChange={this.handleNameChange} className="change"></input>
            <br />
              Image URL (show the world your finished product!):
            < br />
          <input value={this.props.store.edit.image} onChange={this.handleImageChange} className="change"></input>
            <br />
              Supplies Needed:
            <br />
          <textarea value={this.props.store.edit.supplies} onChange={this.handleSupplyChange} className="change"></textarea>
            <br />
              Steps:
            <br />
          <textarea value={this.props.store.edit.description} onChange={this.handleStepChange} className="change"></textarea>
            <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </>
    )
  }
}


  export default connect(mapStoreToProps)(Edit);