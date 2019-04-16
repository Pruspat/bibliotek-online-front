import React, {Component} from 'react';
import AllUsersItemSalary from "./AllUsersItemSalary";
import axios from 'axios'


class AllUsersSalary extends Component {

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

        axios.get('http://localhost:8081/customer/getWorkers',  {headers: headers}).then(resp => {
            this.setState({users: resp.data});
            console.log("worker" + resp.data);
            console.log(this.state.users);
        });
    }


    render() {

            if (this.state.users) {
                return (

                    <div className="row d-flex justify-content-around">
                        {this.state.users.map((item) =>
                            <AllUsersItemSalary user={item}/>
                        )}
                    </div>
                );
            } else {
                return <div>Brak pracowników</div>;
            }


    }
}

export default AllUsersSalary;
