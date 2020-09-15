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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

import '../Details/Icon.css'
import '../card.css';


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

  const favedProject = {
    user_id: props.store.user.id,
    project_id: props.project.p_id
  }

  const handleClick = () => {
    props.dispatch({ type: 'ADD_FAVORITE', payload: favedProject })
  }

  const theme = createMuiTheme({
    typography: {
      h4: {
        fontFamily: 'Dancing Script, cursive',
      },
      h6: {
        fontFamily: 'Patua One, cursive',
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div >
        <Card >
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
              <Button startIcon={<Avatar alt="painted heart" src="https://cdn4.vectorstock.com/i/thumb-large/10/23/painted-heart-vector-3651023.jpg" />} onClick={handleClick}></Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(connect(mapStoreToProps)(MediaCard))
