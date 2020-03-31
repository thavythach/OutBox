import React from 'react';
import PinningAction from '../pinningaction/pinningaction.component.jsx';
import SnoozeAction from '../snoozeaction/snoozeaction.component.jsx';
import DeleteAction from '../deleteaction/deleteaction.component.jsx';
import {ButtonGroup, Button} from '@material-ui/core';

import './actions.styles.css';

class Actions extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isPinned: null,
            snoozeDate: null,
            isDeleted: false,
        };

    }

    deleteCallback = (data) => {
        this.setState({ isDeleted: data}, () => {
            
            // TODO: delete animation occurs when delete from screen happens.
            if (this.state.isDeleted){

            }
        });
    }

    snoozeCallback = (date) => {
        this.setState({snoozeDate: date}, () => {console.log("the real date: " + this.state.snoozeDate);});
    }

    pinCallback  =  (data)  =>  {
        this.setState({isPinned: data}, () => {
            if (this.state.isPinned){
                console.log("Email Pinned");
                // TODO: add to list of emails in DB
            } else {
                console.log("Email Unpinned");
                // TODO: remove from list of emails in DB
            }
        });
    }

  render(){
    return(
      <div className="Actions">
        <div className="actions-content">
            <PinningAction className="actions-item" pinCallback={this.pinCallback}/>
            <SnoozeAction className="actions-item" snoozeCallback={this.snoozeCallback}/>
            <DeleteAction className="actions-item" deleteCallback={this.deleteCallback}/>
        </div>
      </div>
    );
  }
}

export default Actions;