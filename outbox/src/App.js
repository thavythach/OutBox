import React, {Component} from 'react';
import './App.css';

// import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
// import ObDrawer from './components/obDrawer/obDrawer.component.jsx';
import Actions from './components/actions/actions.component.jsx';
import ToDoList from './components/t_email/t_email.component.jsx';
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
        <Container>
          <User/>
        </Container>
      </div>
    );
  }
}

export default App;