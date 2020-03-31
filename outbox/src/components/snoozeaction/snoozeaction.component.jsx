import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';
import { format } from "date-fns";

import OBDateTimePicker from '../datetimepicker/datetimepicker.component.jsx';
import SnoozeItem from '../snoozeitem/snoozeitem.component.jsx';

import './snoozeaction.styles.css';

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
                open: false,
            }, () => {
                // console.log("Snooze Popover closed.");
            }
        );
    }

    itemCallback = (close, newDate) => {
        this.handleClose();
        this.setState({date: newDate }, () => {
            console.log("new snooze date: " + this.state.date);
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

        const snoozeData = [];
        let tmpDate = new Date(this.currentDate); 
        let tmpHours = tmpDate.getHours();
        let tmp = null;

        //  Handle Later Today
        if (tmpHours >= 8 && tmpHours < 13){
            tmp = new Date(tmpDate.setHours(13,0,0));
        } else if ( tmpHours >= 13 && tmpHours < 18){
            tmp = new Date(tmpDate.setHours(18,0,0));
        } 
        
        if (tmpHours >= 8 && tmpHours < 18){
            snoozeData.push({id:1,title:'Later Today',day:this.threeLetterName(tmp.getDay()),time:format(tmp, "hh:mm a"),date:tmp});
        }

        // Handle Tomorrow
        tmp = new Date(tmpDate);
        tmp = new Date(tmp.setDate(tmpDate.getDate() + 1));
        tmp = new Date(tmp.setHours(8,0,0));
        
        snoozeData.push({id:2,title:'Tomorrow',day:this.threeLetterName(tmp.getDay()),time:format(tmp, "hh:mm a"),date:tmp});

        // Handle Later This week
        tmp = new Date(tmpDate);
        tmp = new Date(tmp.setDate(tmp.getDate() + 2));
        tmp = new Date(tmp.setHours(8,0,0));
        
        snoozeData.push({id:3,title:'Later this week',day:this.threeLetterName(tmp.getDay()),time:format(tmp, "hh:mm a"),date:tmp});


        let x;
        // Handle This Weekend
        tmp = new Date(tmpDate);
        x = (6-tmp.getDay());
        if ( tmp.getDay() === 6) x = 7;
        tmp = new Date(tmp.setDate(tmp.getDate() + x ));
        tmp = new Date(tmp.setHours(8,0,0));

        snoozeData.push({id:4,title:'This weekend',day:this.threeLetterName(tmp.getDay()),time:format(tmp, "hh:mm a"),date:tmp});

        // Handle Next Week
        tmp = new Date(tmpDate);
        x = (1-tmp.getDay() + 7);
        if (tmp.getDay() === 0) x = 1; 
        tmp = new Date(tmp.setDate(tmp.getDate() + x));
        tmp = new Date(tmp.setHours(8,0,0));

        snoozeData.push({id:5,title:'Next week',day:this.threeLetterName(tmp.getDay()),time:format(tmp, "hh:mm a"),date:tmp});
        
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
                
                <MenuList className="snooze-menu">
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

                        {this.createSnoozeItems().map((data)=><SnoozeItem key={data.id} close={this.itemCallback} itemTitle={data.title} itemDay={data.day} itemTime={data.time} itemDate={data.date}/>)}

                        <Divider/>

                        <MenuItem onClick={this.setPickDateTimeTrue} className="SnoozeDateTime">
                            <ListItemIcon>
                                <InsertInvitationIcon fontSize="large"/>
                                <OBDateTimePicker isClicked={this.state.pickDateTime} DTCallback={this.DTCallback}/>
                            </ListItemIcon>

                        </MenuItem>

                    </Menu>

                </MenuList>

            </div>
            
        );
    }
}

export default (SnoozeAction);