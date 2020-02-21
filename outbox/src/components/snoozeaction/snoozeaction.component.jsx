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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';

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
                
                <MenuList>
                <Menu
                    id="fade-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}
                >
                    <ListItem className="snoozeUntil">Snooze until...</ListItem>

                    <Divider/>

                    <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                        <Grid container spacing={3}><Grid item xs={12} sm={6}>Later today</Grid>
                            <Grid item xs={12} sm={6} className="gridAlignRight">Mon, 6:00 PM</Grid>
                        </Grid>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                        <Grid container spacing={3}><Grid item xs={12} sm={6}>Tomorrow</Grid>
                            <Grid item xs={12} sm={6} className="gridAlignRight">Tue, 8:00 AM</Grid>
                        </Grid>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                        <Grid container spacing={3}><Grid item xs={12} sm={6}>Later this week</Grid>
                            <Grid item xs={12} sm={6} className="gridAlignRight">Wed, 8:00 AM</Grid>
                        </Grid>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                        <Grid container spacing={3}><Grid item xs={12} sm={6}>This weekend</Grid>
                            <Grid item xs={12} sm={6} className="gridAlignRight">Sat, 8:00 AM</Grid>
                        </Grid>
                    </MenuItem>

                    <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                        <Grid container spacing={3}><Grid item xs={12} sm={6}>Next week</Grid>
                            <Grid item xs={12} sm={6} className="gridAlignRight">Mon, 8:00 AM</Grid>
                        </Grid>
                    </MenuItem>

                    <Divider/>

                    <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                        <ListItemIcon>
                            <InsertInvitationIcon fontSize="small"/>
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Pick date & time
                        </Typography>
                    </MenuItem>


                </Menu>

                </MenuList>

            </div>
            
        );
    }
}

SnoozeAction.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SnoozeAction);