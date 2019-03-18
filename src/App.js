import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import ConstElement from "./ConstElement";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Login",
        };

        this.setPage = this.setPage.bind(this);
    }


    setPage(page) {
        this.setState({currentPage: page})
    }


    render() {


        return (
            <div className="container">
                <Header setPage={this.setPage}/>
                <ConstElement page={this.state.currentPage}/>
                <Footer/>
            </div>
        );


    }
}

export default App;
