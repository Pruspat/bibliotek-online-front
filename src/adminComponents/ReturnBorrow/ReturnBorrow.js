import React, {Component} from 'react';
import axios from 'axios'


class ReturnBorrow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {},
            token: document.cookie.split('=')
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let data = this.state.form;

        console.log("podane id uzytkownika" + data.id);

        fetch('http://localhost:8081/borrow/return/'+data.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            }
        });

    }

    handleChange(ev) {
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form: data});
        console.log(data);
    }


    render() {
        return (

            <div className="row pt-5 pb-5 d-flex justify-content-center">
                <div>
                    <h3 className="d-flex justify-content-center pb-5">Zwróć ksiązkę</h3>
                    <form className="d-flex flex-column justify-content-center" onSubmit={this.handleSubmit}>
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="id">Podaj identyfikator wypożyczenia</label>
                                <input name="id" type="text" className="form-control" id="id" placeholder="63"
                                       required onChange={this.handleChange}/>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-dark ">Zwróć</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReturnBorrow;
