import React, {Component} from 'react';
import './App.css';
import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
import ObDrawer from './components/obDrawer/obDrawer.component.jsx';
import EmailList from './components/list/list.component.jsx';
import Actions from './components/actions/actions.component.jsx';
import User from './components/user/user.component.jsx'; 
import {Container} from 'semantic-ui-react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      color: '#655b39', 
    };


  }

  render(){
    return(
      <div className="App">
        <MenuAppBar color={this.state.color}>
        </MenuAppBar>
        <EmailList></EmailList>
        <Container>
          <Actions/>
        </Container>
      </div>
      
    );
  }
}

export default App;