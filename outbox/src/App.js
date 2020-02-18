import React, {Component} from 'react';
import './App.css';

import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
import ObDrawer from './components/obDrawer/obDrawer.component.jsx';
import EmailList from './components/list/list.component.jsx';

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
        
       <MenuAppBar color={this.state.color}>
         
       </MenuAppBar>
       <EmailList></EmailList>

      </div>
    );
  }
}

export default App;