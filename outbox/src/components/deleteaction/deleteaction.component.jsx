import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import './deleteaction.styles.css';

class DeleteAction extends React.Component {
    
    sendDeleteData = event => {
        this.setState({ isDeleted: true}, () => {
            this.props.deleteCallback(this.state.isDeleted);
        });
    }

    constructor(props){
        super(props);

        this.state = {
            isDeleted: false,
        }
    }

    render(props){
        return(
            <IconButton onClick={this.sendDeleteData}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        )
    }

}

export default DeleteAction;