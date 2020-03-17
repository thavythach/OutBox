import React from 'react';
import Icon from '../../icons/pin/pin.svg.component';
import IconButton from '@material-ui/core/IconButton';

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
            <div className="PinningAction">
                <IconButton onClick={this.sendPinData}>
                    <Icon icon="pin" color={ this.state.isPinned ? "blue" : "gray" }></Icon>
                </IconButton>
            </div>
        );
    }
}

export default PinningAction;