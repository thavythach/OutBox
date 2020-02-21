import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';

import OBDateTimePicker from '../datetimepicker/datetimepicker.component.jsx';
import SnoozeItem from '../snoozeitem/snoozeitem.component.jsx';

import './snoozeaction.styles.css';

// const styles = theme => ({
//     typography: {
//         padding: theme.spacing(3, 2),
//         maxWidth: 360
//     },
// });

class SnoozeAction extends React.Component {  

    constructor(props){
        super(props);

        this.currentDate = new Date();

        this.state = {
            anchorEl: null,
            open: false,
            pickDateTime: false,
            date: this.currentDate,
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

    setPickDateTimeTrue = () => {
        this.setState({pickDateTime: true}, () => {console.log(this.state.pickDateTime)});
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

    DTCallback = (picked, newDate) => {
        console.log("new date: " + this.state.date);
        this.setState({pickDateTime: picked, date: newDate}, () => {
            console.log("yeet: " +this.state.pickDateTime);
            console.log("new date: " + this.state.date);
        });
    }
    
    render(props){
        // let id = this.state.open ? 'simple-popover' : undefined;
        // const {classes} = this.props;

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

                    <SnoozeItem itemTitle="Later Today" itemDay="Mon" itemTime="6:00 PM"/>
                    <SnoozeItem itemTitle="Tomorrow" itemDay="Tue" itemTime="8:00 AM"/>
                    <SnoozeItem itemTitle="Later this week" itemDay="Wed" itemTime="8:00 AM"/>
                    <SnoozeItem itemTitle="This weekend" itemDay="Sat" itemTime="8:00 AM"/>
                    <SnoozeItem itemTitle="Next Week" itemDay="Mon" itemTime="8:00 AM"/>

                    <Divider/>

                    <MenuItem onClick={this.setPickDateTimeTrue} className="SnoozeDateTime">
                        <ListItemIcon>
                            <InsertInvitationIcon fontSize="large"/>
                        </ListItemIcon>
                        <OBDateTimePicker isClicked={this.state.pickDateTime} DTCallback={this.DTCallback}/>

                    </MenuItem>

                </Menu>

                </MenuList>

            </div>
            
        );
    }
}

// SnoozeAction.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SnoozeAction);
export default (SnoozeAction);