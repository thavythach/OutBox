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
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';

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

    itemCallback = (close) => {
        this.handleClose();
        console.log(typeof(this.state.date))
        this.setState({date: new Date(this.state.date.setHours(18,0,0)) }, () => {
            console.log("new date: " + this.state.date);
            console.log("new date: " + this.state.date.getHours());
            console.log("new date: " + this.threeLetterName(this.state.date.getDay()));
        });
    }

    threeLetterName = (DOTW) => {
        switch (DOTW){
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat"
            default:
                // TODO: throw exception or do nothing
                return null; 
        }
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
            this.props.snoozeCallback(this.state.date);
        });
    }


    createSnoozeItems = () => {
        let snooze = [];

        let tmpDate = this.state.date;

        const snoozeData = [
            {id:1,title:'Later Today',day:this.threeLetterName(tmpDate.getDay()),time:tmpDate.getHours()},
            {id:2,title:'Tomorrow',day:this.threeLetterName(tmpDate.getDay()),time:tmpDate.getHours()},
            {id:3,title:'Later this week',day:this.threeLetterName(tmpDate.getDay()),time:tmpDate.getHours()},
            {id:4,title:'This weekend',day:this.threeLetterName(tmpDate.getDay()),time:tmpDate.getHours()},
            {id:5,title:'Next week',day:this.threeLetterName(tmpDate.getDay()),time:tmpDate.getHours()},
        ];
        
        return snoozeData;
    }

    DTCallback = (picked, newDate) => {
        console.log("new date: " + this.state.date);
        this.setState({pickDateTime: picked, date: newDate}, () => {
            console.log("yeet: " +this.state.pickDateTime);
            console.log("new date: " + this.state.date);
        });
    }
    
    render(props){

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

                    {this.createSnoozeItems().map((data)=><SnoozeItem key={data.id} close={this.itemCallback} itemTitle={data.title} itemDay={data.day} itemTime={data.time + ":00 PM"}/>)}

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

export default (SnoozeAction);