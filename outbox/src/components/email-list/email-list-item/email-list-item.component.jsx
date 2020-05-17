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
            added: [],
            inbox: emailData,
        }

        this.prepareEmailForRender();
    }

    prepareEmailForRender() {
        console.log("inbox", this.state.inbox);

        this.state.inbox.forEach(email => {
            console.log("individual email", email);
            this.state.added.push(email);
        });
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

                    {/* {this.state.added.push(email.panelItem)} */}
                </div>
            ))
        );
    }
    
    addDummyEmailItem() {
        let email = emailData[0];
        console.log("test", email, email['panelItem']);
        email['panelItem'] = uuid() 
        this.state.added.push(email['panelItem']);
        console.log("Added: ", this.state.added);
        console.log("test", email, email['panelItem']);
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
                {/* {this.populateInbox()}
                <Button onClick={this.addDummyEmailItem}>help</Button> */}
                <Button onClick={console.log(this.state.added)}>What's been added?</Button>
            </div>
        );
    }
}

export default EmailListItem;