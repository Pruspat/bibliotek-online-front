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
            pageForRole: null,
            isLoading: true
        };

        this.setPage = this.setPage.bind(this);
        this.role = this.role.bind(this);
    }

    componentWillMount(){

       if(this.state.token[1] !== ""){
           var headers = {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + this.state.token[1]
           }

           axios.get('http://localhost:8081/customer/getRole', {headers: headers}).then(resp => {
               this.setState({role: resp.data})
               console.log("app response role: " + resp.data);
               this.role();
           });
       }else{
           this.setState({isLoading:false})
       }
    }



    role(){
        console.log("role")
        if(this.state.role === "admin"){
            this.setState({pageForRole:"admin"})
            console.log("teraz jestes admin")
        }else if(this.state.role === "worker"){
            this.setState({pageForRole:"worker"})
            console.log("teraz jestes worker")
        } else if(this.state.role === "kierownik"){
            console.log("teraz jestes kierownik")
            this.setState({pageForRole:"kierownik"})
        }

        this.setState({isLoading:false})
    }

    setPage(page) {
        this.setState({currentPage: page})
    }


    render() {
        if (this.state.isLoading)
        {
            return(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }else{}

            if (window.location.pathname.includes("admin")) {
                console.log("cyk" + this.state.pageForRole)
                return (
                    <div className="container">
                        <p>{this.state.role}</p>
                        <HeaderAdmin setPage={this.setPage}/>
                        <ConstElementAdmin page={this.state.currentPage} pageForRole={this.state.pageForRole}/>
                        <FooterAdmin/>
                    </div>
                );

            } else {
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
