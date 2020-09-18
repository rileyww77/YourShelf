import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Divider from '@material-ui/core/Divider';

import '../Details/Icon.css'
import '../card.css';
import ProjectSnackbar from './ProjectSnackbar.js'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    height: '100%'
    }

});

function MediaCard(props) {
  const classes = useStyles();


  return (
      <div >
        <Card className={classes.card}>
          <CardActionArea onClick={() => { props.history.push(`/details/${props.project.p_id}`) }}>
            <CardMedia
              className={classes.media}
              image={props.project.image}
              title={props.project.image}
            />
            <Divider className="divider"></Divider>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2" className="title">
                {props.project.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2" className="user">
                {props.project.username}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div>
              <ProjectSnackbar project={props.project}/>
            </div>
          </CardActions>
        </Card>
      </div>
  );
}

export default withRouter(connect(mapStoreToProps)(MediaCard))
