import React, {Component} from 'react';
import axios from 'axios'


class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form:{},
            token:document.cookie.split('=')
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }


    handleSubmit(){
        let data =  this.state.form;
        let result ={
            authorName : data.name,
            authorSurname : data.surname,
            title : data.title,
            type : data.type,
            isbnNr : data.isbnNr
        }

        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':  'Bearer ' + this.state.token[1]
        }


        axios.post('http://localhost:8081/book/add',{}, {headers: headers}).then(resp => {
            this.setState({books: resp.data});
            console.log(this.state.books);
        });

    }

    handleChange(ev){
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form:data});
        console.log(data);
        console.log(this.state.token[1]);
    }


    render() {
        return (

            <div className="row pt-5 pb-5 d-flex justify-content-center">
                <div>
                    <h3 className="d-flex justify-content-center pb-5">Dodaj książkę</h3>
                    <form className="d-flex flex-column justify-content-center" >
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="title">Podaj Tytuł</label>
                                <input name="title" type="text" className="form-control" id="title" placeholder="Zemsta" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Podaj gatunek</label>
                                <input name="type" type="text" className="form-control" id="type" placeholder="Komedia" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="isbn">Podaj nr isbn</label>
                                <input name="isbn" type="text" className="form-control" id="isbn" placeholder="0123456789123" required pattern="[0-9]{13}"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">Podaj imię autora</label>
                            <input name="name" type="text" className="form-control" id="isbn" placeholder="Aleksander" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">Podaj nazwisko autora</label>
                            <input name="surname" type="text" className="form-control" id="isbn" placeholder="Fredro" required />
                        </div>

                        <button type="submit" className="btn btn-primary "onClick={this.handleSubmit}>Dodaj</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBook;
