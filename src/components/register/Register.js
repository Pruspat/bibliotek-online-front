import React, {Component} from 'react';


class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form:{},
            token:document.cookie.split('=')
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }


    handleSubmit(){
        let data =  this.state.form;
        let result ={
            email : data.email,
            password : data.password,
            name : data.name,
            surname : data.surname,
            sex : data.sex,
            age : data.age,
            city: data.city,
            street: data.street,
            homeNr: data.homeNr,
            postalCode:data.postalCode,
        }
        console.log(result);

        fetch('http://localhost:8081/customer/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authentication':  'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify(result)
        })
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
                        <div className="card card-signin">
                            <div className="card-body">
                                <h5 className="card-title text-center">Rejestracja</h5>
                                <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
                                    <div className="form-row">

                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input name="email" type="email" className="form-control" id="email"
                                                   placeholder="Email" onChange={this.handleChange} required />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Hasło</label>
                                            <input name="password" type="text" className="form-control" id="password"
                                                   placeholder="Password" onChange={this.handleChange} required />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Imię</label>
                                            <input name="name" type="text" className="form-control" id="name"
                                                   placeholder="Jan" onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Nazwisko</label>
                                            <input name="surname" type="text" className="form-control" id="surname"
                                                   placeholder="Kowalski" onChange={this.handleChange} required />
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
                                            <input name="homeNr" type="text" className="form-control" id="number" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputZip">Kod pocztowy</label>
                                            <input name="postalCode" type="text" className="form-control" id="postalCode" onChange={this.handleChange}/>
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
