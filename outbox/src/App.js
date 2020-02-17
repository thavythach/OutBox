import React, {Component} from 'react';
import './App.css';

import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
import ObDrawer from './components/obDrawer/obDrawer.component.jsx';
import PinningAction from './components/pinningaction/pinningaction.component.jsx';

class App extends Component {

  constructor(){
    super();

    this.state = {
      color: '#655b39'
    };

  }


  render(){
    return(
      <div className="App">
        <PinningAction />
      </div>
    );
  }
}

export default App;