import React, {Component} from 'react';
import axios from 'axios'
import AdminSupportItem from "./AdminSupportItem";


class AdminSupport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reply: false,
            replyId: null,
            supports: [],
            form: {},
            token: document.cookie.split('='),
        };

        this.replier = this.replier.bind(this);
        this.handleSubmitt = this.handleSubmitt.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.btr = this.btr.bind(this);
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        }

        axios.get('http://localhost:8081/support/all', {headers: headers}).then(resp => {
            this.setState({supports: resp.data});
            console.log(this.state.supports);
        });
    }

    btr(){

        this.setState({
            reply: false,
        })
        console.log(this.state.reply);
        console.log("click adminSupport");

    }

    replier(id) {
        this.setState({
            reply: true,
            replyId: id
        })
    }

    handleChange(ev) {
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form: data});
        console.log(data);
        console.log(this.state.form);
    }

    handleSubmitt(e) {
        console.log("submit");
        e.preventDefault();
        let data = this.state.form;
        let result = {
            id: this.state.replyId,
            replay: data.replay
        };


        fetch('http://localhost:8081/support/replay', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify(
                result
            )
        });
        console.log(result);
        console.log(this.state.replyId);

    }

    render() {

        if (this.state.reply === false) {
            if (this.state.supports) {
                return (

                    <div className="row d-flex justify-content-around">
                        {this.state.supports.map((item) =>
                            <AdminSupportItem support={item} replier={this.replier}/>
                        )}
                    </div>
                );
            } else {
                return <div>Brak zgłoszeń</div>;
            }
        } else {

            return (
                <div className="row pt-5 pb-5 d-flex justify-content-center">
                    <div className="col-6">
                        <h3 className="d-flex justify-content-center pb-5">Odpowiedź dla użytkownika</h3>
                        <form className="d-flex flex-column justify-content-center" onSubmit={this.handleSubmitt}>
                            <div className="d-flex justify-content-center">
                                <div className="form-group">
                                    <label htmlFor="content">Odpowiedz użytwkonikowi</label>
                                    <textarea rows="4" cols="50" name="replay" type="text" className="form-control"
                                              id="replay"
                                              placeholder="Twoja odpowiedź"
                                              required onChange={this.handleChange}/>
                                </div>

                            </div>

                            <button type="submit" className="btn btn-dark" >Wyślij</button>
                        </form>
                    </div>
                </div>
            )
        }


    }
}

export default AdminSupport;
