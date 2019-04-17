import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ConstElement from "./ConstElement";
import ConstElementAdmin from "./adminComponents/ConstElementAdmin";
import FooterAdmin from "./adminComponents/footer/FooterAdmin";
import HeaderAdmin from "./adminComponents/header/HeaderAdmin";
import axios from "axios";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
            token: document.cookie.split(";")[0].split('='),
            role: null,
            pageForRole: null
        };

        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {

       if(this.state.token[1] !== ""){
           var headers = {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + this.state.token[1]
           }

           axios.get('http://localhost:8081/customer/getRole', {headers: headers}).then(resp => {
               this.setState({role: resp.data})
               console.log("app response role: " + resp.data);
           });


       }
    }


    setPage(page) {
        this.setState({currentPage: page})
    }


    render() {
        if(window.location.pathname.includes("admin")){
            return (
                <div className="container">
                    <p>{this.state.role}</p>
                    <HeaderAdmin setPage={this.setPage}/>
                    <ConstElementAdmin page={this.state.currentPage} pageForRole={this.state.pageForRole}/>
                    <FooterAdmin/>
                </div>
            );
        }else{
            return (
                <div className="container">
                    <Header setPage={this.setPage}/>
                    <ConstElement page={this.state.currentPage}/>
                    <Footer/>
                </div>
            );
        }
    }
}

export default App;
