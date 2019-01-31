import React, { Component } from 'react';
import AllBooksItem from "./AllbooksItem";
import axios from 'axios'


class AllBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnVzcGF0QGdtYWlsLmNvbSIsImV4cCI6MTU0OTgyNDgyMn0.VVpecT_OcYKbFKgUykxoCmbLtm9CVIwm6BkH_GrfDmjrXH6iJ_s_4Rfj8_Lw7aykChBcoTD-qVaORKBlfkF2ug'
        };

        axios({ method: 'POST',url: 'http://localhost:8080/book/all', headers: headers}).then((resp)=>{
            this.setState({books:resp.data});

    });
    }



    render() {
        if(this.state.books){
            return (

                <div className="row d-block">
                    {this.state.books.map((item)=>
                    <AllBooksItem book={item}/>
                    )}
                </div>
            );
        }else{
             return <div>Brak książek</div>;
        }

    }
}

export default AllBooks;
