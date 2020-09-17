import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import './Button.css'


class AddProjectButton extends Component {

    handleClick = (event) => {
        this.props.history.push('/newProject')
    }

    render() {
        
        return (
                <div className="align">
                        <Button className="button">Add a project!<img alt="user avatar" src={'/images/plus.png'} height="50" onClick={this.handleClick} /></Button>
                </div>
        );
    }
}

export default withRouter(AddProjectButton);

