import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      hello: 5
    };
  }

  render(){
    return(
      <div className="App">
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default App;
