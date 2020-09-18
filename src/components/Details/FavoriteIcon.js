import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function FavoriteIcon(props) {

    const favedProject = {
        user_id: props.store.user.id,
        project_id: props.projectId
    }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    props.dispatch({ type: 'ADD_FAVORITE', payload: favedProject })
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick}>
      <Avatar alt="geometric heart" src="https://cdn.impactinit.com/cdn/x/x@3a7cc664c4/smss52/smsimg30/pv/isignstockcontributors/iss_20768_00617.jpg" />
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to your Shelf!
        </Alert>
      </Snackbar>
      
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(FavoriteIcon))