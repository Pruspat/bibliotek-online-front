import React, { Component } from 'react';
import axios from "axios";
// import './Header.css';

class ResponseItem extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.replys)
    }



    render() {


        if(this.props.replys.status === true){
            return (
                <div className="pb-3">
                    <div className="d-flex border border-success p-3 w-100 justify-content-between" style={{background:"antiquewhite"}}>
                        <div className="col col-lg-6 border-right border-success text-center">
                            {this.props.replys.content}
                        </div>

                        <div className="col col-lg-6 text-center border-success">
                            {this.props.replys.replay}

                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="pb-3">
                    <div className="d-flex border border-success p-3 w-100 justify-content-between">
                        <div className="col col-lg-6 border-right border-success text-center">
                            {this.props.replys.content}
                        </div>

                        <div className="col col-lg-6 text-center border-success">
                            {this.props.replys.replay}

                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default ResponseItem;
