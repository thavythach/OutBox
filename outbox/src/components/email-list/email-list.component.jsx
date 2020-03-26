import React from "react";

import { List, ListItem, ListItemAvatar,ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, EmailIcon, Container, ExpansionPanel, Typography, TextField, ExpansionPanelDetails,ExpansionPanelSummary, CssBaseline} from '@material-ui/core';

import Actions from '../actions/actions.component';
import EmailListItem from './email-list-item/email-list-item.component';

import './email-list.styles.css';

class EmailList extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div class="email-list">
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                            <EmailListItem class="email-list-item"></EmailListItem>
                            <EmailListItem class="email-list-item"></EmailListItem>
                            <EmailListItem class="email-list-item"></EmailListItem>
                            <EmailListItem class="email-list-item"></EmailListItem>
                            <EmailListItem class="email-list-item"></EmailListItem>
                            <EmailListItem class="email-list-item"></EmailListItem>
                        </Typography>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}

export default EmailList;