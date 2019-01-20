import React, { Component } from 'react';

class AllBooksItem extends Component {

    render() {
        return (

            <div className="d-flex">
                <img alt="zdj ksiązki" src="favicon.ico"/>
                <div>
                    <h3>Tytuł książki</h3>
                    <p>Opis książki</p>
                </div>
            </div>
        );
    }
}

export default AllBooksItem;
