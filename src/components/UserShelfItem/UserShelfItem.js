import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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

function MediaCard(props) {
    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
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
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.project.name}
                    </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                            {props.project.username}
                            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <FavoriteAlert favoriteId={props.project.fav_id} />
            </CardActions>
        </Card>
        </div>
        </ThemeProvider>
    );
}

export default withRouter(connect(mapStoreToProps)(MediaCard))