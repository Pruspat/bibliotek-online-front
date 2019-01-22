import React, { Component } from 'react';

class AllBooksItem extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (


            <div className="d-flex">
                <img alt="zdj ksiązki" src="favicon.ico"/>
                <div>
                    <h3>{this.props.book.title}</h3>
                    <p>{this.props.book.type}</p>
                </div>
            </div>

        );
    }
}

export default AllBooksItem;
