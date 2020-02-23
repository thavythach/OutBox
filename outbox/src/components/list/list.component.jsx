import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import './list.styles.css'

const generate = element => (
  // TODO change this so that it generates based off of server data in the backend
  [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
)

export default class InteractiveList extends React.Component {
  constructor() {
    super();
    this.state = {
      dense: false,
      secondary: false,
      emailVisible: false,
    }
  }
  render() {
    const handleClick = () => {
      console.log("handleClick: opening email");
      this.setState({
        emailVisible: !this.state.emailVisible,
      }, ()=>{console.log(this.state.emailVisible)})
    }

    return (
      <div className="root">
        <Container>
          <Grid 
            container={true}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={11}>
              <div className="demo">
                <List dense={this.state.dense}>
                  {generate(
                    <ListItem
                      divider={true}
                      button={true}
                      onClick={handleClick}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <EmailIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                        secondary={this.state.secondary ? "Secondary text" : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
                {this.state.emailVisible ? <TextField>Hello</TextField> : null}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}