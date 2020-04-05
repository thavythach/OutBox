import React from "react";

import { Container, Typography, CssBaseline} from '@material-ui/core';

import Actions from '../actions/actions.component';
import EmailListItem from './email-list-item/email-list-item.component';

import './email-list.styles.css';

class EmailList extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        
        return(
            <div className="email-list">
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                            <EmailListItem className="email-list-item"></EmailListItem>
                        </Typography>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}

export default EmailList;