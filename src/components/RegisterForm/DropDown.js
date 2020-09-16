import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function DropDown(props) {
  const classes = useStyles();
  const [icon, setIcon] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setIcon(event.target.value);
    props.dispatch({ type: 'SET_ICON', payload: event.target.value})
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Choose one!</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={icon}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Choose one</em>
          </MenuItem>
          <MenuItem value={"/images/Abstract.jpg"}><Avatar alt="abstract shape" src="/images/Abstract.jpg" /></MenuItem>
          <MenuItem value={"/images/DIY.jpeg"}><Avatar alt="DIY letters" src="/images/DIY.jpeg" /></MenuItem>
          <MenuItem value={"/images/Garden.jpg" }><Avatar alt="garden spade" src="/images/Garden.jpg" /></MenuItem>
          <MenuItem value={"/images/Gold.jpg"}><Avatar alt="gold paint stroke" src="/images/Gold.jpg" /></MenuItem>
          <MenuItem value={"/images/Hammer.png"}><Avatar alt="hammer and wrench" src="/images/Hammer.png" /></MenuItem>
          <MenuItem value={"/images/Paintbrush.jpeg"}><Avatar alt="paintbrush" src="/images/Paintbrush.jpeg" /></MenuItem>
          <MenuItem value={"/images/Rainbow.jpg"}><Avatar alt="rainbow paper" src="/images/Rainbow.jpg" /></MenuItem>
          <MenuItem value={"/images/Succulent.jpg"}><Avatar alt="succulent" src="/images/Succulent.jpg" /></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(DropDown))
