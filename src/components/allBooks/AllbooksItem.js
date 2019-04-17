import React, {Component} from 'react';
import axios from "axios";

class AllBooksItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookId: null,
            isBorrowed: null,
            reviews: null,
            token: document.cookie.split('='),
        }
        this.handleBorrow = this.handleBorrow.bind(this);
        this.showReviews = this.showReviews.bind(this);
    }


    componentDidMount() {
        this.setState({bookId: this.props.book.bookEntity.id});
        this.setState({isBorrowed: this.props.book.bookEntity.borrowed});

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        console.log("ksiazka: " + this.props.book)
        axios.get('http://localhost:8081/borrow/avg-book/' + this.props.book.bookEntity.id, {headers: headers}).then(resp => {
            this.setState({bookId: resp.data});
        });

        console.log("ocena ksaizki : " +  this.state.bookId)
        if (typeof this.state.bookId !== "number") {
            this.setState({bookId: 0})
        }

    }

    handleBorrow(e) {

        console.log(this.state.bookId)

        fetch('http://localhost:8081/borrow/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify([this.props.book.bookEntity.id])
        })
        window.location.reload(true);
    }

    showReviews(){
        console.log(this.state.bookId)
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        };

        console.log('Bearer ' + this.state.token[1]);

        axios.get('http://localhost:8081/borrow/get-review/'+this.props.book.bookEntity.id,{headers: headers}).then(resp => {
            this.setState({reviews: resp.data});
            console.log(resp.data);
        });
    }


    render() {
        if (this.state.isBorrowed !== true) {
            if (typeof (this.state.bookId) !== "number") {
                return (


                    <form onSubmit={this.handleBorrow}
                          className="mb-3 border border-dark rounded mt-3 col-lg-5  d-flex justify-content-center  align-items-center flex-column">

                        <div className="d-flex mt-3">
                            <img alt="zdj ksiązki" src={this.props.book.bookEntity.img} style={{width: 80},{height:80}} className="pr-5"/>
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
            } else {
                return (
                    <div className="col-lg-5 d-flex justify-content-center  align-items-center flex-column">
                    <form onSubmit={this.handleBorrow}
                          className="mb-3 border border-dark rounded mt-3 d-flex justify-content-center  align-items-center flex-column w-100">

                        <div className="d-flex mt-3">
                            <img alt="zdj ksiązki" src={this.props.book.bookEntity.img} style={{width: 80},{height:80}} className="pr-5"/>
                            <div className="">
                                <div name="authorName">
                                    <span>Autor: </span>{this.props.book.authorEntityList[0].name}{this.props.book.authorEntityList[0].surname}{this.props.book.authorSurname}
                                </div>
                                <div name="title"><span>Tytuł: </span>{this.props.book.bookEntity.title}</div>
                                <div name="type"><span>Gatunek: </span>{this.props.book.bookEntity.type}</div>
                                <div><span>Średnia ocena: </span>{this.state.bookId}</div>
                            </div>
                        </div>
                        <button className="btn btn-primary w-75 mb-3" type="submit">Wypożycz</button>
                    </form>
                        <button className="btn btn-primary" onClick={this.showReviews}>Zobacz recenzje</button>

                        <div className="">
                            {this.state.reviews}
                        </div>
                    </div>
                );
            }
        } else {

            if (typeof (this.state.bookId) !== "number") {
                return (
                        <form onSubmit={this.handleBorrow} style={{background: "#a0a0a0"}}
                              className="mb-3 border border-dark rounded mt-3 col-lg-5 d-flex justify-content-center  align-items-center flex-column">

                            <div className="d-flex mt-3">
                                <img alt="zdj ksiązki" src={this.props.book.bookEntity.img} style={{width: 80},{height:80}} className="pr-5"/>
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
            } else {
                return (
                    <form onSubmit={this.handleBorrow} style={{background: "#a0a0a0"}}
                          className="mb-3 border border-dark rounded mt-3 col-lg-5 d-flex justify-content-center  align-items-center flex-column">

                        <div className="d-flex mt-3">
                            <img alt="zdj ksiązki" src={this.props.book.bookEntity.img} style={{width: 80},{height:80}} className="pr-5"/>
                            <div className="">
                                <div name="authorName">
                                    <span>Autor: </span>{this.props.book.authorEntityList[0].name}{this.props.book.authorEntityList[0].surname}{this.props.book.authorSurname}
                                </div>
                                <div name="title"><span>Tytuł: </span>{this.props.book.bookEntity.title}</div>
                                <div name="type"><span>Gatunek: </span>{this.props.book.bookEntity.type}</div>
                                <div><span>Średnia ocena: </span>{this.state.bookId}</div>
                            </div>
                        </div>
                        <div>Książka aktualnie jest wypożyczona</div>
                    </form>
                );
            }

        }
    }
}

export default AllBooksItem;
