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
import AddAuthor from "./components/author/AddAuthor";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allBooks:null,
            login:null,
            contact:null,
            borrow:null,
            addBook:1
        };
        this.setPage = this.setPage.bind(this);
    }


    setPage(args){
        this.state = args;

        // console.log(args);
        console.log(this.state);
        console.log("app");
    }


    render() {
        if (this.state.login !== null) {
            return (
                <div className="container">
                    <Header setPage={this.setPage}/>
                    <AllBooks/>
                    <Footer/>
                </div>);
        } else if (this.state.login !== null) {
            return (
                <div className="container">
                    <Header setPage={this.setPage}/>
                    <Login/>
                    <Footer/>
                </div>);
        }else if(this.state.contact !== null){
            return (
            <div className="container">
                <Header setPage={this.setPage}/>
                <Contact/>
                <Footer/>
            </div>);
        }else if(this.state.borrow !== null){
            return (
            <div className="container">
                <Header setPage={this.setPage}/>
                <Borrow/>
                <Footer/>
            </div>);
        }else if(this.state.addBook !==  null){
            return (
                <div className="container">
                    <Header getPage={this.setPage}/>
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
