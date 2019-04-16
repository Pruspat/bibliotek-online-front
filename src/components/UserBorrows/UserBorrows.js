import React, {Component} from 'react';
import UserBorrowsItem from "./UserBorrowsItem";
import axios from 'axios'


class UserBorrows extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ub: [],
            form: {},
            token: document.cookie.split('=')
        };

    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        axios.get('http://localhost:8081/customer/publicBorrow',  {headers: headers}).then(resp => {
            this.setState({ub: resp.data});
            console.log(this.state.ub);
        });
    }





    render() {
        if (this.state.ub) {
            return (
                <div>

                    <div className="row d-flex justify-content-around">
                        {this.state.ub.map((item) =>
                            <UserBorrowsItem book={item}/>
                        )}
                    </div>
                </div>
            );
        } else {
            return <div>Brak użytkowników</div>;
        }

    }
}

export default UserBorrows;
