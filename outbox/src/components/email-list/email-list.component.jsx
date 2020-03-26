import React from "react";

import { List, ListItem, ListItemAvatar,ListItemSecondaryAction, ListItemText, Avatar, IconButton, Grid, EmailIcon, Container, ExpansionPanel, Typography, TextField, ExpansionPanelDetails,ExpansionPanelSummary, CssBaseline} from '@material-ui/core';

import Actions from '../actions/actions.component';
import { makeStyles } from '@material-ui/core/styles';

import './email-list.styles.css';

class EmailList extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div class="email_list">
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                            <email-list-item></email-list-item>
                        </Typography>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}

export default EmailList;