import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'


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
    

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.project.image}
          title={props.project.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.username}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button onClick={() => {props.history.push(`/details/${props.project.id}`)}}size="small" color="primary">
          View Project
        </Button>
        <Button onClick={() => {props.history.push(`/edit/${props.project.id}`)}}size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(MediaCard);