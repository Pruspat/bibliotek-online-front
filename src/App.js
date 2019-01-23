import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddBook from "./components/addBooks/AddBook";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Borrow from "./components/borrow/Borrow";
import AllBooks from "./components/allBooks/AllBooks";
import Contact from "./components/contact/Contact";
import AddAuthor from "./author/AddAuthor";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routing: "allBooks"
        };
        this.setPage = this.setPage.bind(this);
    }

    setPage(page) {
        this.setState({routing: page});
    }

    render() {
        if (this.state.routing === "allBooks") {
            return (
                <div className="container">
                    <Header setPage={this.setPage}/>
                    <AllBooks/>
                    <Footer/>
                </div>);
        } else if (this.state.routing === "login") {
            return (
                <div className="container">
                    <Header/>
                    <Login/>
                    <Footer/>
                </div>);
        }else if(this.state.routing === "kontakt"){
            return (
            <div className="container">
                <Header/>
                <Contact/>
                <Footer/>
            </div>);
        }else if(this.state.routing === "borrow"){
            return (
            <div className="container">
                <Header/>
                <Borrow/>
                <Footer/>
            </div>);
        }else if(this.state.routing === "addBook"){
            return (
                <div className="container">
                    <Header/>
                    <AddBook/>
                    <Footer/>
                </div>);
        }
        // }else if((this.state.routing === ""){
        //     <div className="container">
        //         <Header/>
        //         <Footer/>
        //     </div>
        // }
        //
        // return(
        //     <div className="container">
        //         <Header/>
        //             <AddAuthor/>
        //         <Footer/>
        //     </div>
        // );
    }
}

export default App;
