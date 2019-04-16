import React, {Component} from 'react';
import AllBooksItem from "./AllbooksItem";
import axios from 'axios'


class AllBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            form: {},
            token: document.cookie.split('=')
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        axios.post('http://localhost:8081/book/all', {}, {headers: headers}).then(resp => {
            this.setState({books: resp.data});
            console.log(this.state.books);
        });
    }


    handleChange(ev) {
        let data = this.state.form;
        let id = ev.target.name;
        data[id] = ev.target.value;
        console.log(this.state.form.cat)


        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        if (this.state.form.cat === "all") {
            axios.post('http://localhost:8081/book/all', {}, {headers: headers}).then(resp => {
                this.setState({books: resp.data});
            });
        } else {

            axios.get('http://localhost:8081/book/by-category/' + this.state.form.cat, {headers: headers}).then(resp => {
                this.setState({books: resp.data});
                console.log("tutaj po kategorii wybranej:" + resp.data);
            });
        }
    }


    render() {
        if (this.state.books) {
            return (
                <div>


                    <div className="dropdown" style={{"margin-left": "-15px"}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filtruj po kategorii:
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="d-flex justify-content-start"><input onChange={this.handleChange}
                                                                                 type="radio" name="cat"
                                                                                 className="dropdown-item" href="#"
                                                                                 style={{"width": "30px"}}
                                                                                 value="komedia"/>Komeida
                            </div>
                            <div className="d-flex justify-content-start"><input onChange={this.handleChange}
                                                                                 type="radio" name="cat"
                                                                                 className="dropdown-item" href="#"
                                                                                 style={{"width": "30px"}}
                                                                                 value="powiesc"/>Powieść
                            </div>
                            <div className="d-flex justify-content-start"><input onChange={this.handleChange}
                                                                                 type="radio" name="cat"
                                                                                 className="dropdown-item" href="#"
                                                                                 style={{"width": "30px"}}
                                                                                 value="epos"/>Epos
                            </div>
                            <div className="d-flex justify-content-start"><input onChange={this.handleChange}
                                                                                 type="radio" name="cat"
                                                                                 className="dropdown-item" href="#"
                                                                                 style={{"width": "30px"}} value="all"/>Wszystkie
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around">
                        {this.state.books.map((item) =>
                            <AllBooksItem book={item}/>
                        )}
                    </div>
                </div>
            );
        } else {
            return <div>Brak książek</div>;
        }

    }
}

export default AllBooks;
