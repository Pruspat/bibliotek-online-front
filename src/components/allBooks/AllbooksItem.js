import React, {Component} from 'react';

class AllBooksItem extends Component {

    constructor(props) {
        super(props);


        this.state = {
            form: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBorrow = this.handleBorrow.bind(this);
    }

    handleBorrow() {
        console.log(this.state.form);
    }

    handleChange(ev) {
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form: data});
        console.log(ev.target);
        this.handleBorrow();
    }

    render() {
        return (


            <div className="mb-3 border border-dark rounded mt-3 col-5 d-flex justify-content-center  align-items-center flex-column">
                <div className="d-flex mt-3">
                    <img alt="zdj ksiązki" src="book.jpg" style={{width: 80},{height:80}} className="pr-5"/>
                    <div className="">
                        <div name="authorName"><span>Autor: </span>{this.props.book.authorName}{this.props.book.authorSurname}</div>
                        <div name="title"><span>Tytuł: </span>{this.props.book.title}</div>
                        <div name="type"><span>Gatunek: </span>{this.props.book.type}</div>
                    </div>
                </div>
                <button className="btn btn-primary w-75 mb-3"  type="submit" onClick={this.handleChange}>Wypożycz</button>
            </div>

        );
    }
}

export default AllBooksItem;
