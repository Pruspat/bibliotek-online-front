import React, {Component} from 'react';

class AllUsersItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            form: null,
            isBorrowed: null,
            token: document.cookie.split('='),
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(ev) {
        let data = this.state.form;
        console.log(ev.target.id)
        console.log(ev.target.name)


        fetch('http://localhost:8081/customer/setRole', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body:JSON.stringify(
                {
                    "id" : ev.target.id,
                    "role" : ev.target.name
                })

        });

        window.location.reload(true);

    };


    render() {

        if (this.props.user.role === "admin") {
            return (
                <form
                    className="justify-content-between mb-3 border border-dark rounded mt-3 mb-3 col-12 d-flex ju  align-items-center">


                    <div className="d-flex  w-100 justify-content-around">
                        <div><span>Imie: </span>{this.props.user.name}</div>
                        <div name="t"><span>Nazwisko: </span>{this.props.user.surname}</div>
                        <div name="type"><span>Rola: </span>{this.props.user.role}</div>

                    </div>

                    <div className="d-flex  w-100 justify-content-around">
                        <input name="admin" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-success w-75"
                               id={this.props.user.id} placeholder="Admin" onClick={this.handleSubmit}/>
                        <input name="user" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-danger w-75"
                               id={this.props.user.id} placeholder="Pracownik" onClick={this.handleSubmit}/>
                        <input name="worker" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-danger w-75"
                               id={this.props.user.id} placeholder="Użytkownik" onClick={this.handleSubmit}/>
                    </div>

                </form>
            );
        } else if (this.props.user.role === "worker") {
            return (
                <form
                    className="justify-content-between mb-3 border border-dark rounded mt-3 mb-3 col-12 d-flex ju  align-items-center">


                    <div className="d-flex  w-100 justify-content-around">
                        <div><span>Imie: </span>{this.props.user.name}</div>
                        <div name="t"><span>Nazwisko: </span>{this.props.user.surname}</div>
                        <div name="type"><span>Rola: </span>{this.props.user.role}</div>

                    </div>

                    <div className="d-flex  w-100 justify-content-around">
                        <input name="admin" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-danger w-75"
                               id={this.props.user.id} placeholder="Admin" onClick={this.handleSubmit}/>
                        <input name="user" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-success w-75"
                               id={this.props.user.id} placeholder="Pracownik" onClick={this.handleSubmit}/>
                        <input name="worker" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-danger w-75"
                               id={this.props.user.id} placeholder="Użytkownik" onClick={this.handleSubmit}/>
                    </div>
                </form>
            );
        } else if (this.props.user.role === "user") {
            return (
                <form onClick={this.handleBorrow}
                      className="justify-content-between mb-3 border border-dark rounded mt-3 mb-3 col-12 d-flex ju  align-items-center">


                    <div className="d-flex  w-100 justify-content-around">
                        <div><span>Imie: </span>{this.props.user.name}</div>
                        <div name="t"><span>Nazwisko: </span>{this.props.user.surname}</div>
                        <div name="type"><span>Rola: </span>{this.props.user.role}</div>

                    </div>

                    <div className="d-flex  w-100 justify-content-around">
                        <input name="admin" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-danger w-75"
                               id={this.props.user.id} placeholder="Admin" onClick={this.handleSubmit}/>
                        <input name="user" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-danger w-75"
                               id={this.props.user.id} placeholder="Pracownik" onClick={this.handleSubmit}/>
                        <input name="worker" type="text" className="col-3 mr-1 mt-1 mb-1 btn btn-success w-75"
                               id={this.props.user.id} placeholder="Użytkownik" onClick={this.handleSubmit}/>
                    </div>
                </form>
            );
        }
    }
}

export default AllUsersItem;
