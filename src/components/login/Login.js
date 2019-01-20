import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/book/list').then((resp)=>{
            console.log(resp);
            this.setState({books:resp.data});
        });
    }



    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Bibliotek Online</h5>
                                <form className="form-signin">
                                    <div className="form-label-group mb-2">
                                        <label htmlFor="inputEmail">Adres email</label>
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Podaj email" required autoFocus/>

                                    </div>

                                    <div className="form-label-group mb-5">
                                        <label htmlFor="inputPassword">Hasło</label>
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Podaj hasło" required/>

                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                        Zaloguj się
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
