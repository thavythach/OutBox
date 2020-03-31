import React from 'react';

import './email-list-item.styles.css';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../actions/actions.component';


class EmailListItem extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            expanded: false,
        }
    }

    handleChange = (panel) => (event, isExpanded) => {
        this.setState({expanded: isExpanded ? panel : false})
    }

    newEmail = (panelItem, recipient, subject, body) => {
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
            <div class="email-list-item">
                {this.newEmail('panel1', "Ken Jung", "I'm going to Hawaii! Kawaabunggaaaa!", "Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!")}
                {this.newEmail('panel2', "Jimmy Nguyen", "I'm going to Hawaii! Kawaabunggaaaa!", "Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!")}
                {this.newEmail('panel3', "Colin Artero", "I'm going to Hawaii! Kawaabunggaaaa!", "Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!")}
                {this.newEmail('panel4', "Kevin Doan", "I'm going to Hawaii! Kawaabunggaaaa!", "Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!")}
            </div>
        );
    }
}

export default EmailListItem;