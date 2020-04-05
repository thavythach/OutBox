import React from 'react';

import { Grid } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../../actions/actions.component';

import './email-preview.styles.css';

class EmailPreview extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render () {
        return (
            <div className="email-preview">
                <Grid 
                    container
                    spacing={3}
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <span className="heading">
                            <span className="heading-icon">
                                <AccountCircleRoundedIcon style={{ fontSize: 40}}/>
                            </span>
                            <span className="heading-text">
                                {this.props.fromAddress}
                            </span>
                        </span>
                    </Grid>
                    
                    <Grid item xs>
                        <div className="subject-preview">
                            {this.props.subject}
                        </div>
                    </Grid>

                    <Grid item xs>
                        <div className="body-preview">
                            {this.props.body}
                        </div>
                    </Grid>
                    
                    <Grid item xs={1}>
                        <Actions />
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default EmailPreview;