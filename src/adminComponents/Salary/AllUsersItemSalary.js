import React, {Component} from 'react';

class AllUsersItemSalary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            form: {},
            token: document.cookie.split('='),
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(ev) {
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form: data});
        console.log(ev.target.name);


        fetch('http://localhost:8081/customer/setSalary', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body:JSON.stringify(
                {
                    "id" : ev.target.name,
                    "salary" : ev.target.value
                })

        });
    }


    render() {

        if(this.props.user.role === "worker"){
            return (
                <form onClick={this.handleBorrow}
                      className="justify-content-between mb-3 border border-dark rounded mt-3 mb-3 col-12 d-flex ju  align-items-center">

                    <div className="d-flex  w-100 justify-content-around">
                        <div className="d-flex align-items-center col-2"><span>Imie: </span>{this.props.user.name}</div>
                        <div className="d-flex align-items-center col-2" name="t"><span>Nazwisko: </span>{this.props.user.surname}</div>
                        <div className="d-flex align-items-center col-2" name="type"><span>Rola: </span>{this.props.user.role}</div>
                        <div className="d-flex align-items-center col-3" name="type"><span>Wynagrodzenie: {this.props.user.salary} </span></div>
                        <div className="d-flex align-items-center col-3" name="type"><span>Podaj nowe: </span> <input onChange={this.handleChange} name={this.props.user.id} id={this.props.user.id}/></div>
                    </div>
                </form>
            );
        }
    }
}

export default AllUsersItemSalary;
