import React, {Component} from 'react';
import AllBooksItem from "./AllbooksItem";
import axios from 'axios'


class AllBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            token: document.cookie.split('=')
        };
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        axios.post('http://localhost:8080/book/all', {}, {headers: headers}).then(resp => {
            this.setState({books: resp.data});
            console.log(this.state.books);
        });
    }


    render() {
        if (this.state.books) {
            return (

                <div className="row d-flex justify-content-around">
                    {this.state.books.map((item) =>
                        <AllBooksItem book={item}/>
                    )}
                </div>
            );
        } else {
            return <div>Brak książek</div>;
        }

    }
}

export default AllBooks;
