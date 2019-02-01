import React, { Component } from 'react';
// import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.setPage(e.target.id);
    }

    render() {
        if(true){
            return (
                <div className="row">
                    <nav className="navbar navbar-expand-sm bg-primary navbar-dark w-100 d-flex justify-content-between rounded-top">
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
                                <a id="Contact" className="nav-link" href="#" onClick={this.handleClick} >Kontakt</a>
                            </li>
                            <li className="nav-item active">
                                <a id="Register" className="nav-link" href="#" onClick={this.handleClick} >Rejestracja</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" id="Login" onClick={this.handleClick}>Zaloguj się</button>
                    </nav>
                </div>
            );
        }else{
            return (
            <div className="row">
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark w-100 d-flex justify-content-between rounded-top">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Strona główna</a>
                        </li>
                        <li className="nav-item active">
                            {/*<a className="nav-link" href="#" onClick={this.props.setPage("login")}>Spis książek</a>*/}
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Historia wypożyczeń</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Kontakt</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Wyloguj się</button>
                </nav>
            </div>
            );
        }

    }
}

export default Header;
