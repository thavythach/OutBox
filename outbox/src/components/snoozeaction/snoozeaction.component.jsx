import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './snoozeaction.styles.css';

const styles = theme => ({
    typography: {
        padding: theme.spacing(3, 2),
        maxWidth: 360
    },
});

class SnoozeAction extends React.Component {  

    constructor(props){
        super(props);

        this.state = {
            anchorEl: null,
            open: false,
        };

    }

    handleClose = event => {
        this.setState(
            {
                open: false
            }, () => {
                console.log("Snooze Popover closed.");
            }
        );
    }
    
    sendSnoozeData = event => {
        this.setState(
            {
                anchorEl: event.currentTarget,
                open: true
            }, () => {
            console.log("Snooze Popover opened.");
        });
        this.props.snoozeCallback("02/17/20");
    }
    
    render(props){
        let id = this.state.open ? 'simple-popover' : undefined;
        const {classes} = this.props;

        return(
            <div className="SnoozeAction">
                <IconButton onClick={this.sendSnoozeData}>
                    <AccessTimeIcon style={{ "color": "gray" }}/>
                </IconButton>

                <Popover 
                    id={id}
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <List className={classes.typography}>
                        <ListItem>Snooze until...</ListItem>
                        <Divider/>

                        <ListItem className="SnoozeDateTime">
                            <ListItemText className="left" primary="Later Today"/>
                            <ListItemText className="right" secondary="Tue, 8:00 AM"/>
                        </ListItem>
                        <ListItem className="SnoozeDateTime">
                            <ListItemText className="SnoozeTimeRight" primary="Tomorrow"/>
                            <ListItemText className="SnoozeTimeLeft"  secondary="Tue, 8:00 AM"/>
                            <ListItemText className="Snooze"/>
                        </ListItem>
                        <ListItem className="SnoozeDateTime">
                            <ListItemText className="SnoozeTimeRight" primary="Next week"/>
                            <ListItemText className="SnoozeTimeLeft"  secondary="Tue, 8:00 AM"/>
                            
                        </ListItem>
                        <ListItem className="SnoozeDateTime">
                            <ListItemText className="SnoozeTimeRight" primary="Someday"/>
                            <ListItemText className="SnoozeTimeLeft"  secondary="Tue, 8:00 AM"/>
                        </ListItem>
                    </List>
                </Popover>
            </div>
        );
    }
}

SnoozeAction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SnoozeAction);