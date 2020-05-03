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
            hover: false,
        }
    }

    toggleHover = () => {
        console.log("hello");
        this.setState({hover: !this.state.hover});
    }

    render () {
        return (
            <div className="email-preview" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <Grid 
                    container
                    spacing={1}
                    alignItems="center"
                    wrap="nowrap"
                >
                    {/* item 1 */}
                    <Grid item xs={2} className="heading-grid">
                        <div className="heading-content">
                            <p className="heading-text">
                                {this.props.fromAddress}
                            </p>
                        </div>
                    </Grid>
                    
                    {/* item 2 */}
                    <Grid item xs={4} className="subject-grid">
                        <div className="subject-content">
                            <p className="subject-text">
                                {this.props.subject}
                            </p>
                        </div>
                    </Grid>

                    {/* item 3 */}
                    <Grid item xs={4} className="body-grid">
                        <div className="body-content">
                            <p className="body-text">
                                {this.props.body}
                            </p>
                        </div>
                    </Grid>
                    
                    {/* item 4 */}
                    <Grid item xs={2} className="time-grid">
                        <div className="flex-time-content">
                            <span className="time-preview">
                                { !this.state.hover && (<span>4:20 PM</span>) }
                                { this.state.hover && <Actions />}
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default EmailPreview;