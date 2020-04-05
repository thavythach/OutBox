import React from 'react';

import ReplyIcon from '@material-ui/icons/Reply';
import { IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import './email-body.styles.css';

class EmailBody extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            content: this.props.content,
            editing: false,
        }
    }

    calculateTimePast = () => {
        console.log("calculate time")
        let time = this.props.timestamp;
        return (
            <span className="past-calculation">
                1 day ago
            </span>
        );
    }

    showReplyForm = () => {
        this.setState({editing: true}, () => {
            console.log("Show Reply Form!", this.state.editing);
        });
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
                                <IconButton onClick={() => this.showReplyForm()}>
                                    <ReplyIcon />
                                </IconButton>
                            </span>
                        </Grid>
                    </Grid>

                <div className="content">
                    {this.props.body}
                </div>

                <div className="reply-box">
     
                    {/* {this.state.isEditing} */}
                </div>
            </div>
        );
    }

}

export default EmailBody;