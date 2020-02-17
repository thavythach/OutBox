import React from 'react';
import PinningAction from '../pinningaction/pinningaction.component.jsx';

class Actions extends React.Component {

  constructor(props){
    super(props);

    this.pinHandler = this.pinHandler.bind(this);

    this.state = {
      isPinned: false, 
    };

  }

  pinHandler() {
    this.setState(
        {isPinned: !this.state.isPinned}, () => {
            if(this.state.isPinned){
                console.log("Email Pinned");
            } else {
                console.log("Email Unpinned");
            }
        }
    );


  }


  render(){
    return(
      <div className="App">
        <PinningAction isPinned={this.state.isPinned} action={this.pinHandler} /> 
      </div>
    );
  }
}

export default Actions;