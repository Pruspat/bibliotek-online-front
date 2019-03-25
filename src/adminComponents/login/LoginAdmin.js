import React, { Component } from 'react';
import axios from 'axios'


class LoginAdmin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form:{},
            resp:null,
            token: document.cookie.split('='),
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.showInfo=this.showInfo.bind(this);

    }

    handleSubmit(e){
        let data =  this.state.form;
        let result ={
            email : data.email,
            password : data.password,
        };

        e.preventDefault();

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        axios.post('http://localhost:8081/login',result, {headers: headers}).then(resp => {

            document.cookie='token=Bearer '+resp.data;

            var headersTwo = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +resp.data
            };

            //jezeli nie jest adminn to kasuj cookie

            axios.get('http://localhost:8081/customer/getRole', {headers: headersTwo}).then(respRole => {

                if(respRole.data !== "admin" || "worker" || ""){
                    document.cookie = "token =";
                    this.showInfo();
                }
            });

        });


    }


    handleChange(ev){
        let data = this.state.form;
        let id = ev.target.name;
        data[id] = ev.target.value;
        // this.setState({form:data});
    }


    showInfo(){
        alert("Nie posiadasz wystarczających uprawnień !!!")
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Biblioteka Online Logowanie Pracownika</h5>
                                <form className="form-signin" onSubmit={this.handleSubmit}>
                                    <div className="form-label-group mb-2">

                                        <label htmlFor="inputEmail4">Email</label>
                                         <input name="email" type="email" className="form-control" id="email"placeholder="Email" onChange={this.handleChange} required/>

                                    </div>

                                    <div className="form-label-group mb-5">
                                        <label htmlFor="inputPassword">Hasło</label>
                                        <input name="password" type="password" className="form-control" id="password" placeholder="Podaj hasło" required  onChange={this.handleChange}/>

                                    </div>

                                    <button className="btn btn-lg btn-dark btn-block text-uppercase" type="submit">
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

export default LoginAdmin;
