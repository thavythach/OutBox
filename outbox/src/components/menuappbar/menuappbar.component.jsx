import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ObDrawer from '../obDrawer/obDrawer.component.jsx';
import './menuappbar.styles.css';

export default class MenuAppBar extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: true,
      anchorEl: false,
      setAnchorEl: null,
    }
  }

  handleMenu = event => {
    this.setState({
      setAnchorEl: event.currentTarget,
      anchorEl: true,
    })
  };
  handleClose = () => {
    this.setState({
      setAncherEl: null,
      anchorEl: false,
    });
  };
  
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
          <ObDrawer/>
            <Typography variant="h6" className="title">
              OutBox
            </Typography>
            {this.state.auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.setAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}