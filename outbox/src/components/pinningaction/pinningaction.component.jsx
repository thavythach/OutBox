import React from 'react';
import Icon from '../../icons/pin/pin.svg.component';
import IconButton from '@material-ui/core/IconButton';

class PinningAction extends React.Component {  
    render(props){
        return(
            <div className="PinningAction">
                <IconButton onClick={() => { this.props.action(); }}>
                    <Icon icon="pin" color={ this.props.isPinned ? "blue" : "gray" }></Icon>
                </IconButton>
            </div>
        );
    }
}

export default PinningAction;