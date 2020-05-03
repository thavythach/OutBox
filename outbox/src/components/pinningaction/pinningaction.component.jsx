import React from 'react';
import Icon from '../../icons/pin/pin.svg.component';
import IconButton from '@material-ui/core/IconButton';
import FiberPinIcon from '@material-ui/icons/FiberPin';

class PinningAction extends React.Component {  

    sendPinData = event => {
        this.setState(
            {
                isPinned: !this.state.isPinned
            }
            , () => {
 
                this.props.pinCallback(this.state.isPinned);
            }
        );
    }

    constructor(props){
        super(props);

        this.state = {
            isPinned: false,
        }
    }
    

    render(props){
        return(
            <IconButton onClick={this.sendPinData}>
                <FiberPinIcon fontSize="small" color={ this.state.isPinned ? "primary" : "inherit" }></FiberPinIcon>
            </IconButton>
        );
    }
}

export default PinningAction;