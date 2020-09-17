import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from "@material-ui/core";
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

import './Edit.css'

const dropStyles = {
  
  border: "1px solid black",
  "background-color": "white",
  
}


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

  handleFinishedUpload = info => {
    console.log(info)
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)

    this.props.dispatch({ type: 'EDIT_IMAGE', payload: info.fileUrl })
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
      <>
        <div className="center">
          <div className="cardBackground">
            Project Name:
            <br />
            <input value={this.props.store.edit.name} onChange={this.handleNameChange} className="change"></input>
            <br />
            Image URL:
            <br />
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
            <textarea value={this.props.store.edit.supplies} onChange={this.handleSupplyChange} className="change"></textarea>
            <br />
              Steps:
            <br />
            <textarea value={this.props.store.edit.description} onChange={this.handleStepChange} className="change"></textarea>
            <br />
            <Button><img src={'/images/submit.jpg'} alt="submit button" height="50" onClick={this.handleSubmit} className="submitButton"></img></Button>
          </div>
        </div>
      </>
    )
  }
}


export default connect(mapStoreToProps)(Edit);