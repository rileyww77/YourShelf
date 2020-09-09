import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Edit extends Component {
    state = {
        heading: 'edit',
    };

    componentDidMount() {
        console.log(this.props.match.params.p_id)
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.p_id })
    }

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                {this.props.store.projectDetails.map((project) => {
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