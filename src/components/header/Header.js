import React, {Component} from 'react';
import {AxiosInstance as Cookies} from "axios";

// import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tmp: null,
            isLogin:null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // this.setState({tmp:document.cookie.split('=')});
        // // this.setState({isLogin: this.state.tmp.split(' ')});
        // console.log(document.cookie.split('='));

    }

    handleClick(e) {
        this.props.setPage(e.target.id);
        // console.log(Cookies.get());
        // console.log(this.state.isLogin[0]);
    }

    render() {
        if(this.state.isLogin !== 'Bearer') {
            return (
                <div className="row">
                    <nav
                        className="navbar navbar-expand-sm bg-primary navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="Main" className="nav-link" onClick={this.handleClick}>Strona główna</a>
                            </li>
                            <li className="nav-item active">
                                <a id="AllBooks" className="nav-link" onClick={this.handleClick}>Spis
                                    książek</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Borrow" className="nav-link"onClick={this.handleClick}>Lista
                                    wpożyczeń</a>
                            </li>
                            <li className="nav-item active">
                                <a id="AddBook" className="nav-link"  onClick={this.handleClick}>Dodaj
                                    książkę</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Contact" className="nav-link" onClick={this.handleClick}>Kontakt</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Register" className="nav-link" onClick={this.handleClick}>Rejestracja</a>
                            </li>
                        </ul>

                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" id="Login" onClick={this.handleClick}>Zaloguj się</button>
                    </nav>
                </div>
            );
        }else{
            return(
                <nav
                    className="navbar navbar-expand-sm bg-primary navbar-dark w-100 d-flex justify-content-between rounded-top">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a id="Main" className="nav-link" href="#" onClick={this.handleClick}>Strona główna</a>
                        </li>
                        <li className="nav-item active">
                            <a id="AllBooks" className="nav-link" href="#" onClick={this.handleClick}>Spis książek</a>
                        </li>
                        <li className="nav-item active">
                            <a id="Borrow" className="nav-link" href="#" onClick={this.handleClick}>Lista wpożyczeń</a>
                        </li>
                        <li className="nav-item active">
                            <a id="AddBook" className="nav-link" href="#" onClick={this.handleClick}>Dodaj książkę</a>
                        </li>
                        <li className="nav-item active">
                            <a id="Contact" className="nav-link" href="#" onClick={this.handleClick}>Kontakt</a>
                        </li>
                        <li className="nav-item active">
                            <a id="Register" className="nav-link" href="#" onClick={this.handleClick}>Rejestracja</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" onClick={this.handleClick}>Wyloguj się</button>

                </nav>
            );
        }
    }
}

export default Header;
