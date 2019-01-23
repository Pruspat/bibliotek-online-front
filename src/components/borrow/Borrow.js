import React, { Component } from 'react';
import axios from "axios";
import BorrowItem from "./BorrowItem";
import AllBooksItem from "../allBooks/AllbooksItem";

class Borrow extends Component {
    constructor(props) {
        super(props);
        this.state = {borrows: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/borrow/list/1').then((resp)=>{
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
