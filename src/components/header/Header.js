import React, { Component } from 'react';
// import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            allBooks: null,contact:null,login:null,borrow:null,addBook:null
        };
        this.setPage=this.setPage.bind(this);
    }

    setPage(e) {

        if(e.target.id === "allBooks") {
            this.state = {allBooks: 1,contact:null,login:null,borrow:null,addBook:null};
            console.log(e.target.id);
        }
        else if(e.target.id === "contact"){
            this.state = {allBooks: null,contact:1,login:null,borrow:null,addBook:null};
            console.log(e.target.id + "header");
        }

    }


    render() {
        if(true){
            return (
                <div className="row">
                    <nav className="navbar navbar-expand-sm bg-primary navbar-dark w-100 d-flex justify-content-between rounded-top">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Strona główna</a>
                            </li>
                            <li className="nav-item active">
                                <a id="allBooks" className="nav-link" href="#" onClick={this.setPage}>Spis książek</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Historia wypożyczeń</a>
                            </li>
                            <li className="nav-item active">
                                <a id="contact" className="nav-link" href="#" onClick={this.props.setPage} >Kontakt</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Zaloguj się</button>
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
