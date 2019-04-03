import React, {Component} from 'react';
import axios from "axios";
import BorrowItem from "./BorrowItem";

class Borrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borrows: [],
            token: document.cookie.split('=')
        };
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        };

        console.log('Bearer ' + this.state.token[1]);

        axios.post('http://localhost:8081/borrow/list', {}, {headers: headers}).then(resp => {
            this.setState({borrows: resp.data});
            console.log(this.state.borrows);
        });
    }

    render() {

        if (this.state.borrows) {
            return (

                <div className="row d-block">
                    <div className="d-flex border border-success p-3 w-100 justify-content-between mb-1">
                        <div className="col col-lg-2 border-right border-success">
                            Tytuł
                        </div>

                        <div className="col col-lg-2 border-right border-success">
                            Data wypożyczenia
                        </div>

                        <div className="col col-lg-2 border-right border-success">
                            Data oddania
                        </div>

                        <div className="col col-lg-2">
                            Status
                        </div>
                    </div>
                    {this.state.borrows.map((borrow) =>
                        <BorrowItem borrow={borrow}/>
                    )}
                </div>
            );
        } else {
            return <div>Brak wypożyczeń</div>;
        }
    }
}

export default Borrow;
