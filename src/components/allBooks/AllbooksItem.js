import React, {Component} from 'react';
import axios from "axios";

class AllBooksItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookId: null,
            isBorrowed: null,
            token:document.cookie.split('='),
        }
        this.handleBorrow = this.handleBorrow.bind(this);
    }


    componentDidMount() {
        this.setState({bookId:this.props.book.bookEntity.id});
        this.setState({isBorrowed:this.props.book.bookEntity.borrowed});
    }

    handleBorrow(e) {

        console.log({bookId:this.state.bookId})
        fetch('http://localhost:8081/borrow/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify({bookId:this.state.bookId})
        })
    }




    render() {
        if(this.state.isBorrowed !== true) {
            return (


                <form onSubmit={this.handleBorrow}
                      className="mb-3 border border-dark rounded mt-3 col-5 d-flex justify-content-center  align-items-center flex-column">

                    <div className="d-flex mt-3">
                        <img alt="zdj ksiązki" src="book.jpg" style={{width: 80},{height:80}} className="pr-5"/>
                        <div className="">
                            <div name="authorName">
                                <span>Autor: </span>{this.props.book.authorEntityList[0].name}{this.props.book.authorEntityList[0].surname}{this.props.book.authorSurname}
                            </div>
                            <div name="title"><span>Tytuł: </span>{this.props.book.bookEntity.title}</div>
                            <div name="type"><span>Gatunek: </span>{this.props.book.bookEntity.type}</div>

                        </div>
                    </div>
                    <button className="btn btn-primary w-75 mb-3" type="submit">Wypożycz</button>
                </form>

            );
        }else{
            return(
                <form onSubmit={this.handleBorrow} style={{background:"#a0a0a0"}}
                          className="mb-3 border border-dark rounded mt-3 col-5 d-flex justify-content-center  align-items-center flex-column">

                <div className="d-flex mt-3">
                    <img alt="zdj ksiązki" src="book.jpg" style={{width: 80},{height:80}} className="pr-5"/>
                    <div className="">
                        <div name="authorName">
                            <span>Autor: </span>{this.props.book.authorEntityList[0].name}{this.props.book.authorEntityList[0].surname}{this.props.book.authorSurname}
                        </div>
                        <div name="title"><span>Tytuł: </span>{this.props.book.bookEntity.title}</div>
                        <div name="type"><span>Gatunek: </span>{this.props.book.bookEntity.type}</div>

                    </div>
                </div>
                    <div>Książka aktualnie jest wypożyczona</div>
            </form>
            );
        }
    }
}

export default AllBooksItem;
