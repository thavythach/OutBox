import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class ObDrawer extends React.Component {
    
    constructor(){
        super();

        this.state = {
        left: false,
        list: makeStyles( {
            list: {
                width: 250,
            },
            fullList: {
                width: 'auto',
            },
        })
      
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

    toggleDrawer() {
        this.setState(state => ({
            left: !state.left
        }));
    }
    
    render(){
        return(
            <div id="ObDrawer">
            
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer}>
                    <MenuIcon />
                </IconButton>

                <Drawer open={this.state.left} onClose={this.toggleDrawer}>
                    <div className={this.list} role="presentation" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}> 
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default ObDrawer;