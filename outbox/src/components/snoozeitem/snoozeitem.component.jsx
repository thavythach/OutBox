import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

class SnoozeItem extends React.Component {
    
    render(props){

        return(
            <div className="SnoozeItem">
            
                <MenuItem onClick={this.handleClose} className="SnoozeDateTime">
                    <Grid container spacing={3}><Grid item xs={12} sm={6}>{this.props.itemTitle}</Grid>
                    <Grid item xs={12} sm={6} className="gridAlignRight">{this.props.itemDay}, {this.props.itemTime}</Grid>
                    </Grid>
                </MenuItem>

            </div>
        );
    }
}

export default SnoozeItem;