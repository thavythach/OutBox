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

    newEmail = (panelItem) => {
        return (
            <div className="email-list-item-content">
                <ExpansionPanel expanded={this.state.expanded === panelItem} onChange={this.handleChange(panelItem)}>
                    <ExpansionPanelSummary flex-grow={1}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={3}>
                                <span className="heading">
                                    <span className="heading-icon"><AccountCircleRoundedIcon style={{ fontSize: 40}}/></span>
                                    <span className="heading-text">Ken Jung</span>
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <span className="text-preview">
                                    <span className="subject-text-preview">
                                        I'm going to Hawaii! Kawaabunggaaaa!
                                    </span> 
                                    &nbsp;-&nbsp;
                                    <span className="body-text-preview">
                                        Hey Jimmy, I'm going to Hawaii. Take care of the cats for me!
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
                {this.newEmail('panel1')}
                {this.newEmail('panel2')}
                {this.newEmail('panel3')}
                {this.newEmail('panel4')}
            </div>
        );
    }
}

export default EmailListItem;