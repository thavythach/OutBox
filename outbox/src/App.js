import React, {Component} from 'react';
import './App.css';

// import MenuAppBar from './components/menuappbar/menuappbar.component.jsx'
// import ObDrawer from './components/obDrawer/obDrawer.component.jsx';
import Actions from './components/actions/actions.component.jsx';
import OBDateTimePicker from './components/datetimepicker/datetimepicker.component.jsx';

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
        <Actions />
      </div>
    );
  }
}

export default App;