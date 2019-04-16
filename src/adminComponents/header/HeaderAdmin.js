import React, {Component} from 'react';
import axios from "axios";

// import './HeaderAdmin.css';

class HeaderAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            token: document.cookie.split('='),
            role: "admin"
        }
        this.handleClick = this.handleClick.bind(this);
        this.logout = this.logout.bind(this);
        this.backToUserView = this.backToUserView.bind(this);
    }

    componentDidMount() {
        if (document.cookie.split(";")[0] !== "token=") {
            this.setState({isLogin: true});
        }

        var headersTwo = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        };

        axios.get('http://localhost:8081/customer/getRole', {headers: headersTwo}).then(respRole => {
            this.setState({role: respRole.data})
        });
    }

    handleClick(e) {
        this.props.setPage(e.target.id);
    }

    backToUserView() {
        window.location.replace("http://localhost:3000");
    }


    logout() {
        document.cookie = "token =";
        this.setState({isLogin: false})
        window.location.reload(true);
    }

    render() {
        if (this.state.isLogin === false) {
            return (
                <div className="row">
                    <nav
                        className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">


                        <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit" id="Register"
                                onClick={this.backToUserView}>Opuść panel
                        </button>
                    </nav>
                </div>
            );
        } else {

            if (this.state.role === "admin") {

                return (
                    <nav
                        className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="AddBook" className="nav-link text-danger" href="#" onClick={this.handleClick}>Dodaj
                                    książkę</a>
                            </li>

                            <li className="nav-item active">
                                <a id="RemoveBook" className="nav-link text-danger" onClick={this.handleClick}>Usuń
                                    książkę</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Support" className="nav-link text-danger" onClick={this.handleClick}>Wiadomości
                                    od kientów</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Return" className="nav-link text-danger" onClick={this.handleClick}>Zwróć
                                    wypożyczenie</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Users" className="nav-link text-danger" onClick={this.handleClick}>Uprawnienia użytkowników</a>
                            </li>
                            <li className="nav-item active">
                                <a id="AllUsersSalary" className="nav-link text-danger" onClick={this.handleClick}>Wynagordzenia</a>
                            </li>
                            <li className="nav-item active">
                                <a id="SetTask" className="nav-link text-danger" onClick={this.handleClick}>Wątki pracowników</a>
                            </li>
                        </ul>

                        <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit"
                                onClick={this.logout}>Wyloguj się
                        </button>

                    </nav>
                );
            }else if(this.state.role === "worker"){
                return (
                    <nav
                        className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="AddBook" className="nav-link text-danger" href="#" onClick={this.handleClick}>Dodaj
                                    książkę</a>
                            </li>

                            <li className="nav-item active">
                                <a id="RemoveBook" className="nav-link text-danger" onClick={this.handleClick}>Usuń
                                    książkę</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Support" className="nav-link text-danger" onClick={this.handleClick}>Wiadomości
                                    od kientów</a>
                            </li>
                        </ul>

                        <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit"
                                onClick={this.logout}>Wyloguj się
                        </button>

                    </nav>
                );
            } else if(this.state.role === "kierownik"){
                return (
                    <nav
                        className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <a id="Support" className="nav-link text-danger" onClick={this.handleClick}>Wiadomości
                                    od kientów</a>
                            </li>

                            <li className="nav-item active">
                                <a id="AllUsersSalary" className="nav-link text-danger" onClick={this.handleClick}>Wynagordzenia</a>
                            </li>
                            <li className="nav-item active">
                                <a id="SetTask" className="nav-link text-danger" onClick={this.handleClick}>Wątki pracowników</a>
                            </li>
                        </ul>

                        <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit"
                                onClick={this.logout}>Wyloguj się
                        </button>

                    </nav>
                );
            } else {

                return(
                    <nav
                        className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="AddBook" className="nav-link text-danger" href="#" onClick={this.handleClick}>Dodaj książkę</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Return" className="nav-link text-danger" onClick={this.handleClick}>Zwróć wypożyczenie</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit" onClick={this.logout}>Wyloguj się</button>
                    </nav>
                );
            }

        }
    }
}

export default HeaderAdmin;
