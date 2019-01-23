import React, {Component} from 'react';

class AllBooksItem extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (


            <div className="mb-3 border mt-3">
                <div className="d-flex">
                    <img alt="zdj ksiązki" src="book.jpg" style={{width: 80},{height:80}} className="pr-5"/>
                    <div className="d-flex align-items-center">
                        <h3>{this.props.book.authorName} {this.props.book.authorSurname} {this.props.book.title} {this.props.book.type}</h3>
                    </div>
                </div>
                <button className="btn btn-primary w-100">Wypożycz</button>
            </div>

        );
    }
}

export default AllBooksItem;
