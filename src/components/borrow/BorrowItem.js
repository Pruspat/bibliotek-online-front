import React, { Component } from 'react';
import axios from "axios";
// import './Header.css';

class BorrowItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="pb-3">
            <div className="d-flex border border-success p-3 w-100 justify-content-between">
                <div>
                    {this.props.borrow.name}
                </div>
                <div className="border-right border-success h-100"></div>
                <div>
                    {this.props.borrow.surname}
                </div>
                <div className="border-right border-success h-100"></div>
                <div>
                    {this.props.borrow.title}
                </div>
                <div className="border-right border-success h-100"></div>
                <div>
                    {this.props.borrow.authorName} {this.props.borrow.authorSurname}
                </div>
                <div className="border-right border-success h-100"></div>
                <div>
                    {this.props.borrow.borrowDate}
                </div>
                <div className="border-right border-success h-100"></div>
                <div>
                    {this.props.borrow.status}
                </div>
            </div>
        </div>
    );
    }
}

export default BorrowItem;
