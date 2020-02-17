import React from 'react';
import Icon from '../../icons/pin/pin.svg.component';
import IconButton from '@material-ui/core/IconButton';



function PinningAction() {
    const [state, setState] = React.useState({
        pin: false,
    });

    const handleAction = () => {
        setState({ ...state, pin: !state.pin});
    };

    return(
        <div className="PinningAction">
            <p>hello</p>
            <IconButton onClick={() => { handleAction() }}>
                <Icon icon="pin" color={ state.pin ? "blue" : "gray"}></Icon>
            </IconButton>
        </div>
    );
}

export default PinningAction;