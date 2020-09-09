import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddProjectButton extends Component {

    handleClick = (event) => {
        this.props.history.push('/newProject')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add a New Project!</button>
            </div>
        );
    }
}

export default withRouter(AddProjectButton);
