import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Edit extends Component {
    
    state = {
        user_id: '',
        name: '',
        image: '',
        supplies: '',
        description: '',
        p_id: this.props.match.params.p_id
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
        this.props.dispatch({ type: 'PUT_UPDATES', payload: this.state})
      }

    componentDidMount() {
        console.log(this.props.match.params.p_id)
        this.props.dispatch({ type: 'FETCH_EDITS', payload: this.props.match.params.p_id })
    }

    render() {
        return (
            <div>
                <h2>Edit</h2>
                {this.props.store.edit.map((project) => {
                    return (
                        <>
                            Project Name:
                            <br />
                            <input defaultValue={project.name} onChange={this.handleNameChange}></input>
                            <br />
                            Image URL (show the world your finished product!):
                            < br />
                            <input defaultValue={project.image} onChange={this.handleImageChange}></input>
                            <br />
                            Supplies Needed:
                            <br />
                            <textarea defaultValue={project.supplies} onChange={this.handleSupplyChange}></textarea>
                            <br />
                            Steps:
                            <br />
                            <textarea defaultValue={project.description} onChange={this.handleStepChange}></textarea>
                            <br />
                            <button onClick={this.handleSubmit}>Submit</button>
                        </>
                    )
                })}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Edit);