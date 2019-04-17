import React, {Component} from 'react';

class AdminSupportItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null,
            isBorrowed: null,
            token: document.cookie.split('='),
        }
        this.reply = this.reply.bind(this);

    }


    componentDidMount() {
        this.setState({content: this.props.support.content});
        console.log("itemy" + this.props.support)
    }


    reply(){
        console.log("reply")
        this.props.replier(this.props.support.id);
    }
    render() {

        if ((this.props.support.status) === false && (this.props.support.workerId != null)) {
            return (
                <div className="mb-3 pb-2 pt-2 border border-dark mt-3 col-12 d-flex  align-items-center">
                    <div className="col-1" name="customerName">{this.props.support.customerName}</div>
                    <div className="col 1" name="customerSurname">{this.props.support.customerSurname}</div>
                    <div className="col-3" style={{"overflow-wrap": "break-word"}}
                         name="content">{this.props.support.content}</div>
                    <button className="btn btn-danger col-3"
                            onClick={this.reply}>Odpowiedz
                    </button>
                </div>
            );
        } else if(this.props.support.workerId != null) {
            return (

                <div className="col-12 p-0">

                    <div className="mb-3 pb-2 pt-2 border border-dark mt-3 col-12 d-flex  align-items-center">
                        <div className="col-2" name="customerName">{this.props.support.customerName}</div>
                        <div className="col 1" name="customerSurname">{this.props.support.customerSurname}</div>
                        <div className="col-3" style={{"overflow-wrap": "break-word"}}
                             name="content">{this.props.support.content}</div>
                        <div className="btn btn-success col-3">Odpowiedziano</div>
                    </div>
                </div>
            );
        } else{
            return(<div></div>);
        }
    }
}

export default AdminSupportItem;
