import React from 'react';

import './email-list-item.styles.css';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../actions/actions.component';

class EmailListItem extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            expanded: false,
            inbox: [
                {
                    "panelItem": 'panel1',
                    "recipient": "Ken Jung",
                    "subject": "I'm going to Hawaii! Kawaabunggaaaa!",
                    "body": "Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!" 
                },
                {
                    "panelItem": 'panel2',
                    "recipient": "Jimmy Nguyen",
                    "subject": "I'm going to Hawaii! Kawaabunggaaaa!",
                    "body": "Hi Ken, Sounds good! Drink dem shots 4 me!" 
                },
                {
                    "panelItem": 'panel3',
                    "recipient": "Kevin Doan",
                    "subject": "I'm going to Hawaii! Kawaabunggaaaa!",
                    "body": "Yo Jimmy, Team Liquid 4 lyfe!" 
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
                            email.recipient, 
                            email.subject, 
                            email.body
                        )
                    }
                </div>
            ))
        );
    }

    addEmail = (panelItem, recipient, subject, body) => {
        return (
            <div className="email-list-item-content">
                <ExpansionPanel expanded={this.state.expanded === panelItem} onChange={this.handleChange(panelItem)}>
                    <ExpansionPanelSummary flex-grow={1}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={3}>
                                <span className="heading">
                                    <span className="heading-icon"><AccountCircleRoundedIcon style={{ fontSize: 40}}/></span>
                                    <span className="heading-text">{recipient}</span>
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
                        this is me.
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