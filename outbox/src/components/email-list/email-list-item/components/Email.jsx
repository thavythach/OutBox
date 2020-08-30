import React from "react";

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import EmailBody from "../email-body/email-body.component";
import EmailPreview from "../email-preview/email-preview.component";


export default (props) => (
  <div className="email">
    <hr />
    Hi I'm an email component with the headline:
    <h2>{props.block.panelItem}</h2>
    <span>{props.block.fromAddress}</span>
    <span>{props.block.toAddress}</span>
    <span>{props.block.subject}</span>
    <span>{props.block.body}</span>
    <span>{props.block.timestamp}</span>
    <div className="email-list-item-content">
      <div className="expansion">
        <ExpansionPanel
          expanded={this.state.expanded === props.block.panelItem}
          onChange={this.handleChange(props.block.panelItem)}
        >
          <ExpansionPanelSummary flex-grow={1}>
            <EmailPreview
              id={props.block.panelItem}
              fromAddress={props.block.fromAddress}
              toAddress={props.block.toAddress}
              subject={props.block.subject}
              body={props.block.body}
              timestamp={props.block.timestamp}
            />
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <EmailBody
              id={props.block.panelItem}
              fromAddress={props.block.fromAddress}
              toAddress={props.block.toAddress}
              subject={props.block.subject}
              body={props.block.body}
              timestamp={props.block.timestamp}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
      </div>
    </div>
  </div>
);
