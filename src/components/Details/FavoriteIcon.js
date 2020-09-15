import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './Icon.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
      width: 200
    },
  
  });

function FavoriteIcon(props) {
    const classes = useStyles();
    const favedProject = {
        user_id: props.store.user.id,
        project_id: props.projectId
    }

    const heartIcon = (
        <Icon>
            <img alt="painted heart" src="https://cdn4.vectorstock.com/i/thumb-large/10/23/painted-heart-vector-3651023.jpg" />
        </Icon>
    )

    const handleClick = () => {
        props.dispatch({ type: 'ADD_FAVORITE', payload: favedProject })
    }

    return (
        <div>
            <Button startIcon={heartIcon} onClick={handleClick}></Button>
        </div>

    );
}

export default withRouter(connect(mapStoreToProps)(FavoriteIcon))