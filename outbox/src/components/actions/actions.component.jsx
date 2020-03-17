import React from 'react';
import PinningAction from '../pinningaction/pinningaction.component.jsx';
import SnoozeAction from '../snoozeaction/snoozeaction.component.jsx';
import DeleteAction from '../deleteaction/deleteaction.component.jsx';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
      <div className="App">
        {/* <h1>Hello, World!</h1> */}
        <ButtonGroup>
            <PinningAction pinCallback={this.pinCallback}/> 
            <SnoozeAction snoozeCallback={this.snoozeCallback}/>
            <DeleteAction deleteCallback={this.deleteCallback}/>
        </ButtonGroup>
      </div>
    );
  }
}

export default Actions;