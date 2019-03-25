import React, {Component} from 'react';

class AdminAllbooksItemRemove extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookId: null,
            isBorrowed: null,
            token: document.cookie.split('='),
        }
        this.handleBorrow = this.handleBorrow.bind(this);
    }


    componentDidMount() {
        this.setState({bookId: this.props.book.bookEntity.id});
        this.setState({isBorrowed: this.props.book.bookEntity.borrowed});


    }

    handleBorrow() {

        console.log({bookId: this.state.bookId})
        fetch('http://localhost:8081/book/remove/' + this.state.bookId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            }
        })
    }


    render() {
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
                <button className="btn btn-danger w-75 mb-3" type="submit">Usuń książkę</button>
            </form>
        );
    }
}

export default AdminAllbooksItemRemove;
