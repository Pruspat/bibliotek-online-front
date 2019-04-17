import React, {Component} from 'react';


class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {},
            token: document.cookie.split('=')
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setPublic = this.setPublic.bind(this);
    }

    setPublic(){

        fetch('http://localhost:8081/customer/setPublic', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token[1]
            },
            body: JSON.stringify(
                {
                    "isPublic" :  true
                }
            )
        });
        console.log("click");

    }


    handleSubmit(e) {
        let data = this.state.form;
        let result = {
            content: data.content
        };


        fetch('http://localhost:8081/support/add', {
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

    }


    handleChange(ev) {
        let data = this.state.form;
        var id = ev.target.name;
        data[id] = ev.target.value;
        this.setState({form: data});
        console.log(data);
        console.log(this.state.form);
    }

    render() {
        return (

            <div className="row d-block">

                <div className="d-flex justify-content-center">
                    <div className="col-6 border border-success p-3 m-2 text-center">
                        Ustaw Profil jako publiczny: <input type="checkbox"  onClick={this.setPublic}/>
                    </div>

                </div>


                {/*<div className="row pt-5 pb-5 d-flex justify-content-center">*/}
                    {/*<div className="col-6">*/}
                        {/*<h3 className="d-flex justify-content-center pb-5">Kontakt z pracownikiem</h3>*/}
                        {/*<form className="d-flex flex-column justify-content-center" onSubmit={this.handleSubmit}>*/}
                            {/*<div className="d-flex justify-content-center">*/}
                                {/*<div className="form-group">*/}
                                    {/*<label htmlFor="content">Opisz swój problem</label>*/}
                                    {/*<textarea rows="4" cols="50" name="content" type="text" className="form-control"*/}
                                              {/*id="content"*/}
                                              {/*placeholder="Twój problem"*/}
                                              {/*required onChange={this.handleChange}/>*/}
                                {/*</div>*/}

                            {/*</div>*/}

                            {/*<button type="submit" className="btn btn-primary ">Wyślij</button>*/}
                        {/*</form>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Settings;
