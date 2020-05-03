import React from 'react';

import ReplyIcon from '@material-ui/icons/Reply';
import LaunchIcon from '@material-ui/icons/Launch';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, TextField, Button, Tooltip } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './email-body.styles.css';

class EmailBody extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            content: this.props.content,
            editing: true,
        }
    }

    calculateTimePast = () => {
        let time = this.props.timestamp;
        return (
            <span className="past-calculation">
                1 day ago
            </span>
        );
    }

    showReplyForm = () => {
        this.setState({editing: true}, () => {});
    }

    hideReplyForm = () => {
        this.setState({editing: false}, () => {});
    }

    renderReplyForm = () => {
        return (
            <div className="reply-form">
                
                <div className="reply-form-heading">
                    <Grid 
                        container 
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <span className="from-address">
                                Lorem Ipsum 
                            </span>
                            &nbsp;
                            <span className="from-address-email">
                                &lt;{this.props.fromAddress}&gt;
                            </span>      
                        </Grid>                  
                        <Grid>
                            <Tooltip title="Pop out reply" placement="bottom">
                                <IconButton>
                                    <LaunchIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </div>

                <TextField
                    id="filled-multiline-static"
                    // label="Multiline"
                    fullWidth
                    multiline
                    rows="4"
                    defaultValue=""
                    variant="outlined"
                />

                <div className="reply-actions">
                    <Grid 
                        container 
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <Tooltip title="Send email" placement="bottom">
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    size="large"
                                >
                                    Send
                                </Button>
                            </Tooltip>
                        </Grid>

                        <Grid>
                            <Tooltip title="Delete draft" placement="bottom">
                                <IconButton onClick={() => this.hideReplyForm()}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>

                    </Grid>
                </div>

            </div>
        );
    }

    render(props) {
        return(
            <div className="email-body">
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid className="leftHeading">
                            <span className="from-address">
                                Lorem Ipsum 
                            </span>
                            &nbsp;
                            <span className="from-address-email">
                                &lt;{this.props.fromAddress}&gt;
                            </span>
                        </Grid>
                        <Grid className="rightHeading">
                            <span className="timestamp">
                                {this.props.timestamp}, 12:24 PM ({this.calculateTimePast()})
                            </span>
                            &nbsp;
                            <span className="reply-btn">
                                <Tooltip title="Reply" placement="bottom">
                                    <IconButton onClick={() => this.showReplyForm()}>
                                        <ReplyIcon />
                                    </IconButton>
                                </Tooltip>
                            </span>
                        </Grid>
                    </Grid>

                <div className="content">
                    {this.props.body}
                </div>

                { this.state.editing && this.renderReplyForm() }
            </div>
        );
    }

}

export default EmailBody;