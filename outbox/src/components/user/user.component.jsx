import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default class User extends React.Component {

    constructor(props){
        super(props);

    }

    componenetWillMount(){
        // this.getUser();
    }

    // TODO: validate the user
    validateUser(address, password, first_name, last_name){
        console.log("Validated User!")
    }

    async getUser() {
        const response = await axios.get("http://localhost:8080/api/v1/user");
        console.log(response.data);
    }

    async createUser(address, password, first_name, last_name, dark_mode){

        this.validateUser(address, password, first_name, last_name);

        // create payload
        const payload = {
            address: address,
            password: password,
            firstname: first_name,
            lastname: last_name,
            darkmode: dark_mode
        };

        const response = await axios.post(
            'http://localhost:8080/api/v1/user',
            payload,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        console.log(response.data);
    }

    render(){
        return(
            <div>
                <p>Hello, World!</p>
                <Button variant="outlined" color="primary" onClick={() => {this.createUser('thavy@outbox.com', 'yeet43', 'thavy', 'thach', true)}}>Create new User</Button>
            </div>
        )
    }
}