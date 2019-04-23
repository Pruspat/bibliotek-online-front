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
import Settings from "./components/settings/Settings";

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
                <div className="container d-flex justify-content-center flex-column" style={{"height":"600px"}}>
                    <img src="https://uoch.edu.pk/wp-content/uploads/2018/01/library-banner.jpg" className="w-100 "/>
                    <h2 className="text-center">System wspomagający prowadzenie biblioteki</h2>
                    <p className="text-center">Projekt ten powstał na potrzeby realizacji tematu pracy inżynierskiej dla Państwowej Wyższej Szkoły Zawodowej
                        kierunku Informatyka specjalność Inżynieria Systemów Informatycznych.</p>
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
        }else if (this.props.page === "Settings") {
            return (
                <div className="container">
                    <Settings/>
                </div>);
        }else{
            return (
                <div className="container d-flex justify-content-around flex-column" style={{"height":"600px"}}>
                    <img src="https://uoch.edu.pk/wp-content/uploads/2018/01/library-banner.jpg" className="w-100 "/>
                    <h2 className="text-center">System wspomagający prowadzenie biblioteki</h2>
                    <p className="text-center">Projekt ten powstał na potrzeby realizacji tematu pracy inżynierskiej dla Państwowej Wyższej Szkoły Zawodowej
                        kierunku Informatyka specjalność Inżynieria Systemów Informatycznych.</p>
                </div>);
        }
    }
}

export default ConstElement;
