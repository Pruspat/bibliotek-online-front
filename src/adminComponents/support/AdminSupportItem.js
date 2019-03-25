import React, {Component} from 'react';

class AdminSupportItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null,
            isBorrowed: null,
            token: document.cookie.split('='),
        }
    }


    componentDidMount() {
        this.setState({content: this.props.support.content});
        console.log("itemy")
    }



    render() {

        if (this.props.support.status === false) {
            return (
                <div
                      className="mb-3 pb-2 pt-2 border border-dark mt-3 col-12 d-flex  align-items-center">
                    <div className="col-1" name="customerName">{this.props.support.customerName}</div>
                    <div className="col 1" name="customerSurname">{this.props.support.customerSurname}</div>
                    <div className="col-6" style={{"overflow-wrap": "break-word"}}
                         name="content">{this.props.support.content}</div>
                    <button className="btn btn-danger col-2" onClick={this.props.replier(this.props.support.id)}>Odpowiedz</button>
                </div>
            );
        } else {
            return (


                <div
                      className="mb-3 pb-2 pt-2 border border-dark mt-3 col-12 d-flex  align-items-center">
                    <div className="col-1" name="customerName">{this.props.support.customerName}</div>
                    <div className="col 1" name="customerSurname">{this.props.support.customerSurname}</div>
                    <div className="col-6" style={{"overflow-wrap": "break-word"}}
                         name="content">{this.props.support.content}</div>
                    <div className="btn btn-success col-2">Odpowiedziano</div>
                </div>
            );
        }
    }
}

export default AdminSupportItem;
