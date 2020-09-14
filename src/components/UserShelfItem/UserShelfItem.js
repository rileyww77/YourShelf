import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FavoriteAlert from '../FavoriteAlert/FavoriteAlert.js';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import '../card.css'



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



function MediaCard(props) {
    const classes = useStyles();

    const getUser = () => {
        props.dispatch ({ type: 'GET_USER', payload: props.project.user_id })
    }

    getUser();

    return (
        <div>
        <Card className={classes.root}>
            <CardActionArea onClick={() => { props.history.push(`/details/${props.project.p_id}`) }}>
                <CardMedia
                    className={classes.media}
                    image={props.project.image}
                    title={props.project.image}
                />
                <Divider className="divider"></Divider>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.project.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.store.username}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <FavoriteAlert favoriteId={props.project.fav_id} />
            </CardActions>
        </Card>
        </div>
    );
}

export default withRouter(connect(mapStoreToProps)(MediaCard))