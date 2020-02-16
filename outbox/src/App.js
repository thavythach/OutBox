import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ObDrawer from './components/obDrawer/obDrawer.component.jsx';

class App extends Component {

  constructor(){
    super();

    this.state = {
    };

  }


  render(){
    return(
      <div className="App">
        <h1>Hello, World!</h1>

        <ObDrawer />
      </div>
    );
  }
}

export default App;
