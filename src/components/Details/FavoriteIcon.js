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
            <Button startIcon={<Avatar alt="painted heart" src="https://cdn.impactinit.com/cdn/x/x@3a7cc664c4/smss52/smsimg30/pv/isignstockcontributors/iss_20768_00617.jpg" />} onClick={handleClick}></Button>
        </div>

    );
}

export default withRouter(connect(mapStoreToProps)(FavoriteIcon))