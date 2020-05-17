import React from "react";

import { Grid } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Actions from "../../../actions/actions.component";
import PinningAction from "../../../pinningaction/pinningaction.component.jsx";
import SnoozeAction from "../../../snoozeaction/snoozeaction.component.jsx";
import DeleteAction from "../../../deleteaction/deleteaction.component.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./email-preview.styles.css";
import { Typography } from "@material-ui/core";

class EmailPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      isPinned: null,
      snoozeDate: null,
      isDeleted: false,
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  deleteCallback = (data) => {
    this.setState({ isDeleted: data }, () => {
      // TODO: delete animation occurs when delete from screen happens.
      if (this.state.isDeleted) {
        console.log("DELETED!");
      }
    });
  };

  snoozeCallback = (date) => {
    this.setState({ snoozeDate: date }, () => {
      console.log("the real date: " + this.state.snoozeDate);
    });
  };

  pinCallback = (data) => {
    this.setState({ isPinned: data }, () => {
      if (this.state.isPinned) {
        console.log("Email Pinned");
        // TODO: add to list of emails in DB
      } else {
        console.log("Email Unpinned");
        // TODO: remove from list of emails in DB
      }
    });
  };

  render() {
    return (
      <div
        className="email-preview {this.state.hover ? test : test2}"
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <Grid container spacing={1} alignItems="center" wrap="nowrap">
          {/* item 1 */}
          <Grid item xs={2} className="heading-grid">
            <div className="heading-content">
              <p className="heading-text">{this.props.fromAddress}</p>
            </div>
          </Grid>

          {/* item 2 */}
          <Grid item xs={4} className="subject-grid">
            <div className="subject-content">
              <p className="subject-text">{this.props.subject}</p>
            </div>
          </Grid>

          {/* item 3 */}
          <Grid item xs={4} className="body-grid">
            <div className="body-content">
              <p className="body-text">{this.props.body}</p>
            </div>
          </Grid>

          {/* item 4 */}
          <Grid item xs={2} className="time-grid">
            <div className="flex-time-content">
              <span className="time-preview">
                {!this.state.hover && <span>4:20 PM</span>}
                {this.state.hover && (
                  <div className="actions-content">
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={
                        <PinningAction
                          className="actions-item"
                          pinCallback={this.pinCallback}
                        />
                      }
                    />
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={
                        <SnoozeAction
                          className="actions-item"
                          snoozeCallback={this.snoozeCallback}
                        />
                      }
                    />
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      control={
                        <DeleteAction
                          className="actions-item"
                          deleteCallback={this.deleteCallback}
                        />
                      }
                    />
                  </div>
                )}
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EmailPreview;
