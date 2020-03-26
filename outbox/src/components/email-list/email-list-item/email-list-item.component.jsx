import React from 'react';

import './email-list-item.styles.css';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../actions/actions.component';


class EmailListItem extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="email-list-item">
                <ExpansionPanel>
                    <ExpansionPanelSummary flex-grow={1}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <span class="heading">
                                    <span class="heading-icon"><AccountCircleRoundedIcon style={{ fontSize: 40}}/></span>
                                    <span class="heading-text">Ken Jung</span>
                                </span>
                            </Grid>
                            <Grid item xs={8}>
                                <span class="text-preview">
                                    <span class="subject-text-preview">
                                        I'm going to Hawaii! Kawaabunggaaaa!
                                    </span> 
                                    &nbsp;-&nbsp;
                                    <span class="body-text-preview">
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
        );
    }
}

export default EmailListItem;