import 'date-fns';
import React, { Fragment } from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import "./datetimepicker.styles.css";

class OBDateTimePicker extends React.Component {  

    sendDTfalse = event => {
        this.setState(
            {
                isOpen: false
            }
            , () => {
 
                this.props.DTCallback(this.state.isOpen, this.state.selectedDate);
            }
        );
    }

    sendDTfalse = event => {
        this.setState(
            {
                isOpen: false
            }
            , () => {
 
                this.props.DTCallback(this.state.isOpen, this.state.selectedDate);
            }
        );
    }

    constructor(props){
        super(props);

        this.state = {
            selectedDate: null,
            isOpen: false
        };  
    }

    handleDateChange = date => {
        this.setState({'selectedDate': date}, () => {console.log(this.state.selectedDate)});
    }

  render(){
    return(
    <MuiPickersUtilsProvider utils={DateFnsUtils} className=".obDT">
        <DateTimePicker
            value={this.state.selectedDate}
            disablePast
            open={this.props.isClicked}
            onOpen={this.sendDTtrue}
            onClose={this.sendDTfalse}
            onChange={this.handleDateChange}
            label="Pick Date Time"
            showTodayButton
        />
    </MuiPickersUtilsProvider>
    );
  }
}

export default OBDateTimePicker;