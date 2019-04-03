import React, {Component} from 'react';
import axios from "axios";
import ResponseItem from "./ResponseItem";

class Response extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replys: [],
            token: document.cookie.split('=')
        };
    }

    componentDidMount() {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.token[1]
        };

        console.log('Bearer ' + this.state.token[1]);

        axios.get('http://localhost:8081/support/allByCustomer', {headers: headers}).then(resp => {
            this.setState({replys: resp.data});
            console.log(this.state.replys);
        });
    }

    render() {

        if (this.state.replys) {
            return (

                <div className="row d-block">
                    <div className="d-flex border border-success p-3 w-100 justify-content-between mb-1">
                        <div className="col col-lg-6 border-right border-success text-center">
                            Pytanie
                        </div>

                        <div className="col col-lg-6 border-success text-center">
                            Odpowiedź
                        </div>

                    </div>
                    {this.state.replys.map((replys) =>
                        <ResponseItem replys={replys}/>
                    )}
                </div>
            );
        } else {
            return <div>Brak wątków</div>;
        }
    }
}

export default Response;
