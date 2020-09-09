import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



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
  }


  render() {
    return (
      <>
        <div>
          <h2>Add a new Project!</h2>
        </div>
        Project Name:
        <br />
        <input placeholder="project name" onChange={this.handleNameChange}></input>
        <br />
        Image URL (show the world your finished product!):
        < br />
        <input placeholder="image URL" onChange={this.handleImageChange}></input>
        <br />
        Supplies Needed:
        <br />
        <textarea placeholder="supplies" onChange={this.handleSupplyChange}></textarea>
        <br />
        Steps:
        <br />
        <textarea placeholder="steps" onChange={this.handleStepChange}></textarea>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewProject);