import React from 'react';
import PinningAction from '../pinningaction/pinningaction.component.jsx';
import SnoozeAction from '../snoozeaction/snoozeaction.component.jsx';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Actions extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isPinned: null,
            snoozeDate: null,
        };

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
      <div className="App">
        <h1>Hello, World!</h1>
        <ButtonGroup>
            <PinningAction pinCallback={this.pinCallback}/> 
            <SnoozeAction snoozeCallback={this.snoozeCallback} />
        </ButtonGroup>
      </div>
    );
  }
}

export default Actions;