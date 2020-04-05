import React from 'react';

import './email-list-item.styles.css';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../actions/actions.component';
import EmailBody from "./email-body/email-body.component";

class EmailListItem extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            expanded: false,
            inbox: [
                {
                    "panelItem": 'panel1',
                    "fromAddress": "Ken@outbox.io",
                    "toAddress": "Jimmy@outbox.io",
                    "subject": "I'm going to Hawaii! Kawaabunggaaaa!",
                    "body": "Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!<br/><br/>><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Take care of the cats for me!<br/><br/>><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Take care of the cats for me!<br/><br/>><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "timestamp": "04/01/2020",
                },
                {
                    "panelItem": 'panel2',
                    "fromAddress": "Jimmy@outbox.io",
                    "toAddress": "Ken@outbox.io",
                    "subject": "I'm going to Hawaii! Kawaabunggaaaa!",
                    "body": "Hi Ken, Sounds good! Drink dem shots 4 me!",
                    "timestamp": "04/01/2020",
                },
                {
                    "panelItem": 'panel3',
                    "fromAddress": "Kevin@outbox.io",
                    "toAddress": "Jimmy@outbox.io",
                    "subject": "I'm going to Hawaii! Kawaabunggaaaa!",
                    "body": "Yo Jimmy, Team Liquid 4 lyfe!",
                    "timestamp": "04/01/2020" ,
                },
            ],
        }
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
                <ExpansionPanel expanded={this.state.expanded === panelItem} onChange={this.handleChange(panelItem)}>
                    <ExpansionPanelSummary flex-grow={1}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={3}>
                                <span className="heading">
                                    <span className="heading-icon"><AccountCircleRoundedIcon style={{ fontSize: 40}}/></span>
                                    <span className="heading-text">{fromAddress}</span>
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <span className="text-preview">
                                    <span className="subject-text-preview">
                                        {subject}
                                    </span> 
                                    &nbsp;-&nbsp;
                                    <span className="body-text-preview">
                                        {body}
                                    </span>
                                </span>
                            </Grid>
                            <Grid item xs={1}>
                                <Actions/>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>

                        <EmailBody 
                            id={panelItem} 
                            fromAddress={fromAddress} 
                            toAddress={toAddress} 
                            subject={subject} 
                            body={body}
                            timestamp={timestamp}
                        >
                        </EmailBody>
                        
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }

    render(){
        return(
            <div className="email-list-item">
                {this.populateInbox()}
            </div>
        );
    }
}

export default EmailListItem;