import React, { Component } from 'react';
// import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {
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
                            <a className="nav-link" href="#">Kontakt</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Zaloguj się</button>
                </nav>
            </div>
        );
    }
}

export default Header;
