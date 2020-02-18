import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    typography: {
        padding: theme.spacing(2),
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
                        <ListItem>
                            <ListItemText primary="Work"/>&nbsp;<ListItemText secondary="Jan 7, 2014" />
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