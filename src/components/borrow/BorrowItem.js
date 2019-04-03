import React, {Component} from 'react';
import axios from "axios";

// import './Header.css';

class BorrowItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {},
            token: document.cookie.split('=')
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.timeConverter = this.timeConverter.bind(this);

        console.log(this.props.borrow);
    }

    timeConverter(time) {
        var a = new Date(time);


        var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        if (year > 1970) {
            return time;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = this.state.form;

        let markAndId = data.mark.split(",");
        let forReview = {
            id: markAndId[1],
            review: data.review
        };

        fetch('http://localhost:8081/borrow/review', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify(
                forReview
            )
        });
        console.log("poszlo review");


        let forMark = {
            id: markAndId[1],
            mark: markAndId[0]
        };

        fetch('http://localhost:8081/borrow/mark', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify(
                    forMark
                )

        });
        console.log("poszlo mark");
        console.log("id " + markAndId[1] + " ocena:" + markAndId[0]);
    }


    handleChange(ev) {

        let data = this.state.form;
        var id = ev.target.id;
        data[id] = ev.target.value;
        this.setState({form: data});
        console.log(data);
    }


    render() {

        if (this.props.borrow.dateOfReturn != null) {

            if (this.props.borrow.mark === null && this.props.borrow.review === "") {

                return (

                    <div>
                        <div className="pb-3">
                            <div className="d-flex border border-success p-3 w-100 justify-content-between">


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
                            <button className="js-review-open bg-success col-lg-12">Ocen lub zrecenzuj</button>
                        </div>

                        <form className=" text-center" onSubmit={this.handleSubmit}>

                            <div className="d-flex justify-content-center">
                                <div className="form-group col-lg-4">
                                    <label htmlFor="review">Recenzja</label>
                                    <input name="review" type="text" className="form-control" id="review"
                                           placeholder="Napisz recenzje"
                                           required onChange={this.handleChange}/>
                                </div>

                                <div className="form-group col-lg-3">
                                    <label htmlFor="mark">Ocena:</label>
                                    <div>
                                        <label className="pr-2 pl-2" htmlFor="mark">1</label>
                                        <input onChange={this.handleChange} id="mark" type="radio" name="1"
                                               value={[1, this.props.borrow.id]}/>
                                        <label className="pr-2 pl-2" htmlFor="mark">2</label>
                                        <input onChange={this.handleChange} id="mark" type="radio" name="1"
                                               value={[2, this.props.borrow.id]}/>
                                        <label className="pr-2 pl-2" htmlFor="mark">3</label>
                                        <input onChange={this.handleChange} id="mark" type="radio" name="1"
                                               value={[3, this.props.borrow.id]}/>
                                        <label className="pr-2 pl-2" htmlFor="mark">4</label>
                                        <input onChange={this.handleChange} id="mark" type="radio" name="1"
                                               value={[4, this.props.borrow.id]}/>
                                        <label className="pr-2 pl-2" htmlFor="mark">5</label>
                                        <input onChange={this.handleChange} id="mark" type="radio" name="1"
                                               value={[5, this.props.borrow.id]}/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success col-lg-2">Dodaj opinie</button>
                        </form>

                    </div>
                );
            } else {

                return (

                    <div>
                        <div className="pb-3">
                            <div className="d-flex border border-success p-3 w-100 justify-content-between">


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
                            <button className="js-review-open bg-success col-lg-12">Książka została juz oceniona
                            </button>
                        </div>
                    </div>
                );
            }

        } else {
            return (
                <div className="pb-3">
                    <div className="d-flex border border-success p-3 w-100 justify-content-between">


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
}

export default BorrowItem;
