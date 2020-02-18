import React, {Component} from 'react';
import './App.css';

// import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
// import ObDrawer from './components/obDrawer/obDrawer.component.jsx';
import Actions from './components/actions/actions.component.jsx';

class App extends Component {

  constructor(props){
    super(props);

    this.pinHandler = this.pinHandler.bind(this);

    this.state = {
      color: '#655b39',
      isPinned: false, 
    };


  }

  pinHandler() {
    this.setState({isPinned: !this.state.isPinned});
  }


  render(){
    return(
      <div className="App">
        <Actions />
      </div>
    );
  }
}

export default App;