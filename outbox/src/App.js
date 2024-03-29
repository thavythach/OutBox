import React, {Component} from 'react';
import './App.css';
import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
// import EmailList from './components/list/list.component.jsx';
import User from './components/user/user.component.jsx'; 
import EmailList from './components/email-list/email-list.component.jsx';
import Flexing from './components/flexing/flexing.component.jsx';


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
        <MenuAppBar color={this.state.color}></MenuAppBar>
        <br/>
        <EmailList></EmailList>
        <br/>
        {/* <Flexing></Flexing> */}

      </div>
      
    );
  }
}

export default App;