import React from "react";

import { List, ListItem, ListItemAvatar,ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, EmailIcon, Container, ExpansionPanel, Typography, TextField, ExpansionPanelDetails,ExpansionPanelSummary } from '@material-ui/core';

import Actions from '../actions/actions.component';
import { makeStyles } from '@material-ui/core/styles';

import './email-list.styles.css';

class EmailList extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        // const classes = useStyles();
        // const [dense] = React.useState(false);
        // const [secondary] = React.useState(false);
        
        return(
            <div class="email_list">
            <p>hello</p>
            </div>
        );
    }
}

export default EmailList;