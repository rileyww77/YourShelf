import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './NewProject.css'



class NewProject extends Component {
  state = {
    user_id: '',
    name: '',
    image: '',
    supplies: '',
    description: ''
  };

  handleNameChange = (event) => {
    this.setState({
      //send along the user id as well to know who created the project
      user_id: this.props.store.user.id,
      name: event.target.value
    })
  }

  handleImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleSupplyChange = (event) => {
    this.setState({
      supplies: event.target.value
    })
  }

  handleStepChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit = () => {
    console.log('clicked')
    this.props.dispatch({ type: 'POST_PROJECT', payload: this.state})
    this.props.history.push('/userProject')
  }


  render() {
    return (
      <div className="center">
        <div>
          <h2>Add a new Project!</h2>
        </div>
        Project Name:
        <br />
        <input placeholder="Project Name" onChange={this.handleNameChange} className="change"></input>
        <br />
        Image URL (show the world your finished product!):
        < br />
        <input placeholder="Image URL" onChange={this.handleImageChange} className="change"></input>
        <br />
        Supplies Needed:
        <br />
        <textarea placeholder="Supplies" onChange={this.handleSupplyChange} className="change"></textarea>
        <br />
        Steps:
        <br />
        <textarea placeholder="Steps" onChange={this.handleStepChange} className="change"></textarea>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </ div>
    );
  }
}

export default connect(mapStoreToProps)(NewProject);