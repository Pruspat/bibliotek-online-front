import React, { Component } from 'react';
import axios from "axios";
// import './Header.css';

class BorrowItem extends Component {
    constructor(props) {
        super(props);

        this.timeConverter = this.timeConverter.bind(this);
    }

    timeConverter(time){
        var a = new Date(time);


            var months = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        console.log(year);
        if(year >1970){
            return time;
        }
    }

    render() {
        return (
        <div className="pb-3">
            <div className="d-flex border border-success p-3 w-100 justify-content-between">
                <div className="col col-lg-2 border-right border-success">
                    {this.props.borrow.authorName}
                </div>

                <div className="col col-lg-2 border-right border-success">
                    {this.props.borrow.authorSurname}
                </div>

                <div className="col col-lg-2 border-right border-success">
                    {this.props.borrow.title}
                </div>

                <div className="col col-lg-2 border-right border-success">
                    {this.timeConverter(this.props.borrow.dateOfBorrow)}
                </div>

                <div className="col col-lg-2 border-right border-success">
                    {this.timeConverter(this.props.borrow.dateOfReturn)}
                </div>

                <div className="col col-lg-2">
                    {this.props.borrow.status}
                </div>
            </div>
        </div>
    );
    }
}

export default BorrowItem;
