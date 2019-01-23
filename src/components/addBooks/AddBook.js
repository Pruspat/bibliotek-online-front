import React, {Component} from 'react';
import axios from 'axios'


class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form:{}
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

        fetch('http://localhost:8080/book/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result)
        })
    }

    handleChange(ev){
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form:data});
        console.log(data);
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
                                <input name="title" type="text" className="form-control" id="title" placeholder="Zemsta"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Podaj gatunek</label>
                                <input name="type" type="text" className="form-control" id="type" placeholder="Komedia"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="isbn">Podaj nr isbn</label>
                                <input name="isbn" type="text" className="form-control" id="isbn" placeholder="0123456789123"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">Podaj imię autora</label>
                            <input name="name" type="text" className="form-control" id="isbn" placeholder="Aleksander"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">Podaj nazwisko autora</label>
                            <input name="surname" type="text" className="form-control" id="isbn" placeholder="Fredro"/>
                        </div>

                        <button type="submit" className="btn btn-primary "onClick={this.handleSubmit}>Dodaj</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBook;
