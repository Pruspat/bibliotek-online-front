import React, {Component} from 'react';
import SetWorkerTaskItem from "./SetWorkerTaskItem";
import axios from 'axios'


class SetWorkerTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            token: document.cookie.split('='),
        };
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        axios.get('http://localhost:8081/customer/getUsers',  {headers: headers}).then(resp => {
            this.setState({users: resp.data});
            console.log(this.state.users);
        });

    }


    render() {

            if (this.state.users) {
                return (
                    <div className="row d-flex justify-content-around">
                        {this.state.users.map((item) =>
                            <SetWorkerTaskItem user={item}/>
                        )}
                    </div>
                );
            }


    }
}

export default SetWorkerTask;
