import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'

const state = {
  
  color:"#656b39",
}

class App extends Component {
  
  
  render(){
    return(
      <MenuAppBar color={state.color}></MenuAppBar>
    );
  }
}

export default App;