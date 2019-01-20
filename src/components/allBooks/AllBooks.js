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
            console.log(resp);
            this.setState({books:resp.data});
        });
    }



    render() {
        return (

            <div className="row d-block">
                <AllBooksItem/>
            </div>
        );
    }
}

export default AllBooks;
