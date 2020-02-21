import 'date-fns';
import React, { Fragment } from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

class OBDateTimePicker extends React.Component {  
    constructor(props){
        super(props);

        this.state = {
            selectedDate: null,
        };  
    }

    handleDateChange = date => {
        this.setState({'selectedDate': date}, () => {console.log(this.state.selectedDate)});
    }

  render(){
    return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
            value={this.state.selectedDate}
            disablePast
            onChange={this.handleDateChange}
            // label="With Today Button"
            showTodayButton
        />
    </MuiPickersUtilsProvider>
    );
  }
}

export default OBDateTimePicker;