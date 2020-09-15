import React from 'react';
import { withRouter } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Nav.css'
 

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleHomeClick = () => {
        props.history.push(`/home`)
    }

    const handleShelfClick = () => {
        props.history.push(`/user`)
    }

    const handleCreateClick = () => {
        props.history.push(`/userProject`)
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home'].map((text, index) => (
                    <ListItem button onClick={handleHomeClick} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                {['Projects on My Shelf'].map((text, index) => (
                    <ListItem button onClick={handleShelfClick} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                {['My Created Projects'].map((text, index) => (
                    <ListItem button onClick={handleCreateClick} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider className="divider"/>
            <List>
                {['Logout'].map((text, index) => (
                    <ListItem button onClick={() => props.dispatch({ type: 'LOGOUT' })} key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Hello, {props.store.user.username}!</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default withRouter(connect(mapStoreToProps)(TemporaryDrawer))