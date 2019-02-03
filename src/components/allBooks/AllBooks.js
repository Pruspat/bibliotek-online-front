import React, { Component } from 'react';
import AllBooksItem from "./AllbooksItem";
import axios from 'axios'


class AllBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnVzcGF0QGdtYWlsLmNvbSIsImV4cCI6MTU0OTg3MzA1N30.GCUjJAi5Xi1Lgx1P-ToTozHyw5axYkDDUj8-Jt500J6N8be19Op1N4vEOl-hlzde9dBF6An8-qEGq1vO9aS_AQ'
        }

        axios.post('http://localhost:8080/book/all',{headers:headers}).then((resp)=>{
            this.setState({books:resp.data});
            console.log(this.state.books);
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
