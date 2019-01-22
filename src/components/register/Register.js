import React, {Component} from 'react';
import axios from 'axios'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/book/list').then((resp) => {
            console.log(resp);
            this.setState({books: resp.data});
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin">
                            <div className="card-body">
                                <h5 className="card-title text-center">Rejestracja</h5>
                                <form className="d-flex flex-column">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Hasło</label>
                                            <input type="password" className="form-control" id="password"
                                                   placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Imię</label>
                                            <input type="email" className="form-control" id="name"
                                                   placeholder="Jan"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Nazwisko</label>
                                            <input type="text" className="form-control" id="surname"
                                                   placeholder="Kowalski"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Miejscowość</label>
                                            <input type="text" className="form-control" id="city"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">Ulica</label>
                                            <input type="text" className="form-control" id="street"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Nr domu</label>
                                            <input type="text" className="form-control" id="number"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Kod pocztowy</label>
                                            <input type="text" className="form-control" id="postalCode"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Płeć</label>
                                            <input type="text" className="form-control" id="sex"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Wiek</label>
                                            <input type="text" className="form-control" id="age"/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Zarejestruj</button>
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
