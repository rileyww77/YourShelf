import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from "@material-ui/core";
import './Icon.css'
import Avatar from '@material-ui/core/Avatar';



function FavoriteIcon(props) {
   
    const favedProject = {
        user_id: props.store.user.id,
        project_id: props.projectId
    }


    const handleClick = () => {
        props.dispatch({ type: 'ADD_FAVORITE', payload: favedProject })
    }

    return (
        <div>
            <Button startIcon={<Avatar alt="painted heart" src="https://cdn4.vectorstock.com/i/thumb-large/10/23/painted-heart-vector-3651023.jpg" />} onClick={handleClick}></Button>
        </div>

    );
}

export default withRouter(connect(mapStoreToProps)(FavoriteIcon))