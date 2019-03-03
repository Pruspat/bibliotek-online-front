import React, {Component} from 'react';
import './App.css';
import AddBook from "./components/addBooks/AddBook";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Borrow from "./components/borrow/Borrow";
import AllBooks from "./components/allBooks/AllBooks";
import Contact from "./components/contact/Contact";
import AddAuthor from "./components/author/AddAuthor";
import AdminAllBooks from "./adminComponents/AdminAllBooks";

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
                    Strona w przebudowie
                </div>);
        } else if (this.props.page === "Register") {
            return (
                <div className="container">
                    <Register/>
                </div>);
        }else if (this.props.page === "RemoveBook"){
            return(
                <div className="container">
                    <AdminAllBooks/>
                </div>
            )
        }
    }
}

export default ConstElement;
