import React, {Component} from 'react';
import axios from "axios";
import $ from "jquery";

class UserBorrowsItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: document.cookie.split('='),
        }
        this.handleBorrow = this.handleBorrow.bind(this);
    }


    componentDidMount() {


        console.log(this.props.book);

    }

    handleBorrow() {

        $(".js-borrows").css("display","block");
        console.log($(".js-borrows")[0]);
    }


    render() {
        if (typeof (this.state.bookId) !== "number") {
            return (

                <form
                    className="mb-3 border border-dark rounded mt-3 col-lg-5 d-flex justify-content-center  align-items-center flex-column">

                    <div className="d-flex mt-3">
                        <div name="name">
                            <span>Imię i Nazwisko: </span>{this.props.book.name}, {this.props.book.surname}


                            {this.props.book.list.map((item) =>
                                <div class="js-borrows" style={{"display":"none"}}>
                                    <div className=" border border-dark rounded mt-1 mb-1"><span>Tytuł: </span>{item.title} <span>Gatunek: </span>{item.type}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <button className="btn btn-primary w-75 mb-3"  onClick={this.handleBorrow}>Zobacz</button>
                </form>

            );
        }
    }
}

export default UserBorrowsItem;
