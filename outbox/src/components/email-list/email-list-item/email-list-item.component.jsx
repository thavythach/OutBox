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
            expanded: '',
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
        });
    }

    removeEmail(key){
        console.log("key", key, this.state.available);
        if (this.state.available.hasOwnProperty(key)){
            delete this.state.available[key]
            console.log("Successfully removed!", this.state.available);
        }
    }
        
    addFakeEmail() {

        let email = emailData[0]; 
        email['panelItem'] = uuid();
        
        let ye = { ...this.state.available };
        ye[email['panelItem']] = email;
        this.setState({ available: ye });
        
        console.log("Fake: ", email);
        console.log("Available", this.state.available);
    }

    handleChange = (panel) => (event, isExpanded) => {
        console.log("ie", isExpanded, panel);
        this.setState({expanded: isExpanded ? panel : ''})
    }

    refreshInbox = () => {
        const { available } = this.state;
        console.log("REFRESH: ", available);

        return(
            Object.keys(available).map((key, index)=>(
                <div key={key}>
                    Key: {key} {console.log('test', available[key])}
                    { 
                        this.addEmail(
                            available[key].panelItem,
                            available[key].fromAddress,
                            available[key].toAddress,
                            available[key].subject,
                            available[key].body,
                            available[key].timestamp
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
                {this.refreshInbox()}
                <Button onClick={() => this.addFakeEmail()}>Add Fake</Button>
                <Button onClick={() => console.log("Available: ", this.state.available)}>List</Button>
            </div>
        );
    }
}

export default EmailListItem;