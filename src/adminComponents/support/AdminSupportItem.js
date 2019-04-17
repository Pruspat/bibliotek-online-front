import React, {Component} from 'react';
import axios from "axios";

class AdminSupportItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null,
            isBorrowed: null,
            token: document.cookie.split('='),
        }
        this.take = this.take.bind(this);

    }


    componentDidMount() {
        this.setState({content: this.props.support.content});
        console.log("itemy" + this.props.support)
        console.log("worker" + this.props.support.workerId)
    }


    take() {

        window.location.reload(true);

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        axios.post('http://localhost:8081/support/getTask', this.state.content, {headers: headers}).then(resp => {
            console.log(resp.data);
        });
    }


    render() {

        // if (this.props.support.status === false) {
        if (typeof this.props.support.workerId === typeof 12) {
            return (
                <div className="">
                    {/*<div className="col-1" name="customerName">{this.props.support.customerName}</div>*/}
                    {/*<div className="col 1" name="customerSurname">{this.props.support.customerSurname}</div>*/}
                    {/*<div className="col-3" style={{"overflow-wrap": "break-word"}}*/}
                    {/*name="content">{this.props.support.content}</div>*/}
                    {/*<button className="btn btn-danger col-3"*/}
                    {/*onClick={this.reply}>Odpowiedz*/}
                    {/*</button>*/}
                </div>
            );
        } else {


            if (true) {
                return (

                    <div className="col-12 p-0">

                        <div className="mb-3 pb-2 pt-2 border border-dark mt-3 col-12 d-flex  align-items-center">
                            <div className="col-2" name="customerName">{this.props.support.customerName}</div>
                            <div className="col 1" name="customerSurname">{this.props.support.customerSurname}</div>
                            <div className="col-3" style={{"overflow-wrap": "break-word"}}
                                 name="content">{this.props.support.content}</div>
                            <div className="btn btn-success col-3" onClick={this.take}>Przemij korespondencje</div>
                        </div>
                    </div>
                );
            }
        }
    }
}

export default AdminSupportItem;
