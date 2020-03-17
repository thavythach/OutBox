import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from '@material-ui/core';

export default class User extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }

    }

    componenetWillMount(){
        // this.getUser();
    }

    // TODO: validate the user
    validateUser(address, password, first_name, last_name){
        console.log("Validated User!")
    }

    async deleteUser(id){
        const response = await axios.delete("http://localhost:8080/api/v1/deleteUser/"+ id);
        console.log(response.data)
    }

    async getAllUsers() {
        const response = await axios.get(
            "http://localhost:8080/api/v1/user"
        )
        // .then(res => {

        // });
        console.log(response.data);
        // console.log(response.data[0])
    }

    async getAllUsersUI() {
        const response = await axios.get("http://localhost:8080/api/v1/user").then(response => {
        if (response.data) {
            this.setState({
                    items: response.data.map(item => {
                        return(
                            <Card key={item._id} variant="outlined">
                                    <CardContent>
                                        <h1>{item.address}</h1>
                                        <h1>{item.password}</h1>
                                        <h1>{item.firstname}</h1>
                                        <h1>{item.lastname}</h1>
                                        <h1>{item.darkmode}</h1>
                                        <Button 
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => {this.getUser(item._id)}}
                                        >
                                        Get {item._id}
                                        </Button>
                                        <Button 
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => {this.deleteUser(item._id)}}
                                        >
                                        Delete {item._id}
                                        </Button>
                                    </CardContent>
                            </Card>
                        );
                    }) 
                });
        } else {
            this.setState({
                items: []
            });
        }                 
        });
        // console.log(response.data);
    }

    async getUser(id) {
        const response = await axios.get("http://localhost:8080/api/v1/user/"+ id)
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
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => {this.createUser('ken@outbox.com', 'yeet43', 'thavy', 'thach', true)}}>
                CreateUser()
                </Button>

                <Button 
                    variant="outlined"
                    color="primary"
                    onClick={() => { this.getAllUsersUI() } }
                >
                GetAllUsers()
                </Button>
                
                <Button 
                    variant="outlined"
                    color="primary"
                    onClick={() => { this.getUser() } }
                >
                GetUser(someid)
                </Button>

                <div>{this.state.items}</div>

            </div>
        )
    }
}