import React, {Component} from 'react';
import axios from 'axios'


class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8080/book/list').then((resp) => {
            this.setState({books: resp.data});
        });
    }


    render() {
        return (

            <div className="row pt-5 pb-5 d-flex justify-content-center">
                <div>
                    <h3 className="d-flex justify-content-center pb-5">Dodaj książkę</h3>
                    <form className="d-flex flex-column justify-content-center">
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="title">Podaj Tytuł</label>
                                <input type="text" className="form-control" id="title" placeholder="Zemsta"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Podaj gatunek</label>
                                <input type="text" className="form-control" id="type" placeholder="Komedia"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="isbn">Podaj nr isbn</label>
                                <input type="text" className="form-control" id="isbn" placeholder="0123456789123"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">Podaj imię autora</label>
                            <input type="text" className="form-control" id="isbn" placeholder="Aleksander"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">Podaj nazwisko autora</label>
                            <input type="text" className="form-control" id="isbn" placeholder="Fredro"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Dodaj</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBook;
