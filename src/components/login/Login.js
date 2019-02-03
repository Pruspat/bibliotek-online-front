import React, { Component } from 'react';
import axios from 'axios'


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form:{},
            resp:null
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }

    handleSubmit(){
        let data =  this.state.form;
        let result ={
            email : data.email,
            password : data.password,
        }
        console.log(result);

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization' : ''
            },
            body: JSON.stringify(result)
        }).then((resp)=> {
            this.setState({resp: resp.data});
            this.props.setAppState(this.state.resp);
    });

    }


    handleChange(ev){
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form:data});
    }



    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Bibliotek Online</h5>
                                <form className="form-signin" onSubmit={this.handleSubmit}>
                                    <div className="form-label-group mb-2">

                                        <label htmlFor="inputEmail4">Email</label>
                                         <input name="email" type="email" className="form-control" id="email"placeholder="Email" onChange={this.handleChange}/>

                                    </div>

                                    <div className="form-label-group mb-5">
                                        <label htmlFor="inputPassword">Hasło</label>
                                        <input name="password" type="password" className="form-control" id="password" placeholder="Podaj hasło" required  onChange={this.handleChange}/>

                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.handleSubmit}>
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
