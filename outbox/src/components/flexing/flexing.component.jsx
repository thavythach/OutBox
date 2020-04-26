import React from 'react';

export default class Flexing extends React.Component {

    constructor(props){

        super(props);
        
        this.state = {
            flexing: 'Flexing begins',
        };

    }

    render() {
        return(
            <div className="flexing">

                { this.state.flexing }

            </div>
        )
    }

}