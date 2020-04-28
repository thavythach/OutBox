import React from 'react';

import { Grid } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Actions from '../../../actions/actions.component';

import './email-preview.styles.css';
import { Typography } from '@material-ui/core';

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
                    spacing={1}
                    alignItems="center"
                    wrap="nowrap"
                >
                    {/* item 1 */}
                    <Grid item xs={4} sm={3} className="heading-grid">
                        <span className="heading-content">
                            <span className="heading-icon">
                                <AccountCircleRoundedIcon style={{ fontSize: 24 }}/>
                            </span>

                            <span className="heading-text">
                                {this.props.fromAddress}
                            </span>
                        </span>
                    </Grid>
                    
                    {/* item 2 */}
                    <Grid item xs={4} sm={4} className="subject-grid">
                        <div className="subject-content">
                            <p className="subject-text">
                                {this.props.subject}
                            </p>
                        </div>
                    </Grid>

                    {/* item 3 */}
                    <Grid item xs={4} sm={4} className="body-grid">
                        <div className="body-content">
                            <p className="body-text">
                                {this.props.body}
                            </p>
                        </div>
                    </Grid>
                    
                    {/* item 4 */}
                    <Grid item xs={4} sm={1}>
                        {/* <Actions /> */}
                        <div className="flex-time-content">
                            <p className="time-preview">
                                4:20 PM
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default EmailPreview;