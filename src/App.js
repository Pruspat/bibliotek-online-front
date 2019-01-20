import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllBooks from "./components/allBooks/AllBooks";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <AllBooks/>

        <Footer/>
      </div>
    );
  }
}

export default App;
