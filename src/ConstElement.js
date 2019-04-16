import React, {Component} from 'react';
import './App.css';
import AddBook from "./adminComponents/addBooks/AddBook";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Borrow from "./components/borrow/Borrow";
import AllBooks from "./components/allBooks/AllBooks";
import Contact from "./components/contact/Contact";
import Response from "./components/response/Response";
import UserBorrows from "./components/UserBorrows/UserBorrows";

class ConstElement extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        if (this.props.page === "AllBooks") {
            return (
                <div className="container">
                    <AllBooks/>
                </div>);
        } else if (this.props.page === "Login") {
            return (
                <div className="container">
                    <Login/>
                </div>);
        } else if (this.props.page === "Contact") {
            return (
                <div className="container">
                    <Contact/>
                </div>);
        } else if (this.props.page === "Borrow") {
            return (
                <div className="container">
                    <Borrow/>
                </div>);
        } else if (this.props.page === "Register") {
            return (
                <div className="container">
                    <Register/>
                </div>);
        } else if (this.props.page === "AddBook") {
            return (
                <div className="container">
                    <AddBook/>
                </div>);
        } else if (this.props.page === "Main") {
            return (
                <div className="container">
                    <h2>Witaj w naszej bibliotece !</h2>
                    <p>Zapraszamy do skorzystania z naszej różnorodnej oferty.</p>
                    <p>Zasady użytkowania naszego portalu znajdziesz pod odnośnikiem: <a href="#">Zasady
                        użytkowania</a></p>
                </div>);
        } else if (this.props.page === "Register") {
            return (
                <div className="container">
                    <Register/>
                </div>);
        }else if (this.props.page === "UserBorrows") {
            return (
                <div className="container">
                    <UserBorrows/>
                </div>);
        }else if (this.props.page === "Replys") {
            return (
                <div className="container">
                    <Response/>
                </div>);
        }
    }
}

export default ConstElement;
