import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlertButton from '../AlertButton/AlertButton.js';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router-dom';





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
                <Button onClick={() => { props.history.push(`/edit/${props.project.p_id}`) }} size="small" color="primary">
                    Edit
        </Button>
        
                <AlertButton projectId={props.project.p_id}/>
            </CardActions>
        </Card>
        </ThemeProvider>
    );
}

export default withRouter(MediaCard);