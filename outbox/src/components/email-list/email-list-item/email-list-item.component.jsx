import React from 'react';

import './email-list-item.styles.css';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../actions/actions.component';
import EmailBody from "./email-body/email-body.component";
import EmailPreview from "./email-preview/email-preview.component";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import emailData from '../emails.json';
import uuid from 'react-uuid';

class EmailListItem extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
            available: {},
            inbox: emailData,
        }

        this.getEmails();
    }

    getEmails() {
        console.log("inbox", this.state.inbox);
        this.state.inbox.forEach(email => {
            const key = uuid();
            email['panelItem'] = key;
            this.state.available[key] = email;
            console.log("individual email", email);
            console.log("Available", this.state.available);
            // this.removeEmail(key);
        });
    }

    removeEmail(key){
        console.log("key", key, this.state.available);
        if (this.state.available.hasOwnProperty(key)){
            delete this.state.available[key]
            console.log("nice", this.state.available);
        }
    }
        
    addFakeEmail() {
        let email = emailData[0]; 
        email['panelItem'] = uuid();
        this.state.available[email['content']] = email;
        console.log("Fake: ", email);
        console.log("Available", this.state.available);
    }

    handleChange = (panel) => (event, isExpanded) => {
        this.setState({expanded: isExpanded ? panel : false})
    }

    populateInbox = () => {
        const { inbox } = this.state;
        return(
            inbox.map(email=>(
                <div key={email.panelItem}>
                    {
                        this.addEmail(
                            email.panelItem, 
                            email.fromAddress,
                            email.toAddress, 
                            email.subject, 
                            email.body,
                            email.timestamp
                        )
                    }
                </div>
            ))
        );
    }

    addEmail = (panelItem, fromAddress, toAddress, subject, body, timestamp) => {
        return (
            <div className="email-list-item-content">
                <div className="expansion">
                    <ExpansionPanel expanded={this.state.expanded === panelItem} onChange={this.handleChange(panelItem)}>
                        <ExpansionPanelSummary flex-grow={1}>
                            <EmailPreview
                                id={panelItem}
                                fromAddress={fromAddress}
                                toAddress={toAddress}
                                subject={subject}
                                body={body}
                                timestamp={timestamp}
                            />
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>
                            <EmailBody 
                                id={panelItem} 
                                fromAddress={fromAddress} 
                                toAddress={toAddress} 
                                subject={subject} 
                                body={body}
                                timestamp={timestamp}
                            />   
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="email-list-item">
                {/* {this.populateInbox()} */}
                <Button onClick={() => this.addFakeEmail()}>Add Fake</Button>
                <Button onClick={() => console.log("Available: ", this.state.available)}>List</Button>
            </div>
        );
    }
}

export default EmailListItem;