import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddBook from "./components/addBooks/AddBook";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Borrow from "./components/borrow/Borrow";
import AllBooks from "./components/allBooks/AllBooks";

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
        // if (this.state.routing === "allBooks") {
        //     return <div><Header setPage={this.setPage}/><AllBooks/><Footer/></div>
        // } else if (this.state.routing === "login") {
        //     return <div><Header/><Login/><Footer/></div>
        // }

        return(
            <div className="container">
                <Header/>
                <Register/>
                <Footer/>
            </div>
        );
    }
}

export default App;
