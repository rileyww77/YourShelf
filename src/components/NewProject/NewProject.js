import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './NewProject.css'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import { Button } from "@material-ui/core";

const dropStyles = {
  
  border: "1px solid black",
  "background-color": "white",
  
}


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
    this.props.dispatch({ type: 'POST_PROJECT', payload: this.state })
    this.props.history.push('/userProject')
  };

  handleFinishedUpload = info => {
    console.log(info)
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)

    this.setState({
      image: info.fileUrl
    })
  }

  render() {

    const uploadOptions = {
      server: 'http://localhost:5000',
      // signingUrlQueryParams: { uploadType: 'avatar' },
    }
    const s3Url = 'http://diybucket.s3.amazonaws.com';

    const innerElement = (
      <div>
        <p className="innerElement">Click or Drop Files Here!</p>
      </div>
    )

    return (
      <div className="NewProject">
        <div>
          <h2>Add a new Project!</h2>
        </div>
        Project Name:
        <br />
        <input placeholder="Project Name" onChange={this.handleNameChange} className="change"></input>
        <br />
        Image URL (show the world your finished product!):
        < br />
        <DropzoneS3Uploader
        children={innerElement}
          onFinish={this.handleFinishedUpload}
          s3Url={s3Url}
          style={dropStyles}
          maxSize={1024 * 1024 * 5}
          upload={uploadOptions}
        />
        <br />
        Supplies Needed:
        <br />
        <textarea placeholder="Supplies" onChange={this.handleSupplyChange} className="change"></textarea>
        <br />
        Steps:
        <br />
        <textarea placeholder="Steps" onChange={this.handleStepChange} className="change"></textarea>
        <br />
        
        {this.state.image ?
            <Button onClick={this.handleSubmit}><img src={'/images/submit.jpg'} alt="submit button" height="50"  className="submitButton"></img></Button>
            : <Button disabled><img src={'/images/submit.jpg'} alt="submit button" height="50" className="submitButton"></img></Button>}
      </ div>
    );
  }
}

export default connect(mapStoreToProps)(NewProject);