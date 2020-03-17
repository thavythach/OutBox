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
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import { ExpansionPanelDetails, ExpansionPanelSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
}

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
      <div className={classes.root}>
        <Container>
          <Grid 
            container={true}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <div className={classes.demo}>
                <List dense={dense}>
                  {generate(
                    <ExpansionPanel>
                      <ExpansionPanelSummary flex-grow={1}>
                        <Typography className={classes.heading}>Email 1</Typography>
                        <DeleteIcon color="secondary" flex-grow={2}></DeleteIcon>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <TextField></TextField>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </List>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}