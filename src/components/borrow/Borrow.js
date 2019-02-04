import React, { Component } from 'react';
import axios from "axios";
import BorrowItem from "./BorrowItem";
import AllBooksItem from "../allBooks/AllbooksItem";

class Borrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borrows: [],
            token:document.cookie.split('=')
        };
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + this.state.token[1]
        };

        console.log('Bearer ' + this.state.token[1]);

        axios.post('http://localhost:8080/book/all',{},{headers:headers}).then(resp=>{
            this.setState({borrows:resp.data});
            console.log(this.state.borrows);
        });
    }

    render() {
        if(this.state.borrows){
            return (

                <div className="row d-block">
                    <div  className="d-flex border border-success p-3 w-100 justify-content-between mb-1">
                        <div>
                            Imie
                        </div>
                        <div className="border-right border-success"></div>
                        <div>
                            Nazwisko
                        </div>
                        <div className="border-right border-success"></div>
                        <div>
                            Tytuł
                        </div>
                        <div className="border-right border-success"></div>
                        <div>
                            Autor
                        </div>
                        <div className="border-right border-success"></div>
                        <div>
                            Data wypożyczenia
                        </div>
                        <div className="border-right border-success"></div>
                        <div>
                            Status
                        </div>
                    </div>
                    {this.state.borrows.map((borrow)=>
                        <BorrowItem borrow={borrow}/>
                    )}
                </div>
            );
        }else{
            return <div>Brak wypożyczeń</div>;
        }
    }
}

export default Borrow;
