import React, { Component } from 'react';
import AllBooksItem from "./AllbooksItem";
import axios from 'axios'


class AllBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/book/list').then((resp)=>{
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
