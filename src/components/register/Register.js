import React, {Component} from 'react';
import axios from 'axios'


class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form:{}
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }


    handleSubmit(){
        let data =  this.state.form;
        let result ={
            login : data.login,
            email : data.email,
            password : data.haslo,
            name : "",
            surname : "",
            sex : "",
            age : "",
            address : "",
            role : "user"

        }


        fetch('http://localhost:8080/customer/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result)
        })
    }



    handleChange(ev){
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form:data});
        console.log(data);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin">
                            <div className="card-body">
                                <h5 className="card-title text-center">Rejestracja</h5>
                                <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input name="email" type="email" className="form-control" id="email"
                                                   placeholder="Email" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Hasło</label>
                                            <input name="haslo" type="password" className="form-control" id="password"
                                                   placeholder="Password" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Imię</label>
                                            <input name="imie" type="text" className="form-control" id="name"
                                                   placeholder="Jan" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Login</label>
                                            <input name="login" type="text" className="form-control" id="login"
                                                   placeholder="login" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Nazwisko</label>
                                            <input name="nazwisko" type="text" className="form-control" id="surname"
                                                   placeholder="Kowalski" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Miejscowość</label>
                                            <input name="city" type="text" className="form-control" id="city" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">Ulica</label>
                                            <input name="street" type="text" className="form-control" id="street" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Nr domu</label>
                                            <input name="nr" type="text" className="form-control" id="number" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Kod pocztowy</label>
                                            <input name="postal" type="text" className="form-control" id="postalCode" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Płeć</label>
                                            <input name="sex" type="text" className="form-control" id="sex" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Wiek</label>
                                            <input name="age" type="text" className="form-control" id="age" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Zarejestruj</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Register;
