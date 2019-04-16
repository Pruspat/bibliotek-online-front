import React, {Component} from 'react';
import {AxiosInstance as Cookies} from "axios";

// import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isLogin: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if(document.cookie.split(";")[0] !== "token="){
            this.setState({isLogin: true});
        }

        console.log("user zalogowany?: " + this.state.isLogin)
    }

    handleClick(e) {
        this.props.setPage(e.target.id);
    }

    logout(){
        document.cookie = "token=";
        this.setState({isLogin: false})
        window.location.reload(true);
    }

    render() {
        if(this.state.isLogin === false) {
            return (
                <div className="row">
                    <nav
                        className="navbar navbar-expand-sm bg-primary navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="Main" className="nav-link" onClick={this.handleClick}>Strona główna</a>
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
                            <a id="Contact" className="nav-link" href="#" onClick={this.handleClick}>Kontakt</a>
                        </li>
                        <li className="nav-item active">
                            <a id="Replys" className="nav-link" href="#" onClick={this.handleClick}>Rozpoczęte wątki</a>
                        </li>
                        <li className="nav-item active">
                            <a id="UserBorrows" className="nav-link" href="#" onClick={this.handleClick}>Wypożyczenia użytkowników</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" onClick={this.logout}>Wyloguj się</button>

                </nav>
            );
        }
    }
}

export default Header;
