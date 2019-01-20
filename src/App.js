import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllBooks from "./components/allBooks/AllBooks";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
class App extends Component {
  render() {
    return (
      <div className="container">

        {/*<Login/>*/}
        <Register/>
        {/*<Header />*/}

        {/*<AllBooks/>*/}

        {/*<Footer/>*/}
      </div>
    );
  }
}

export default App;
