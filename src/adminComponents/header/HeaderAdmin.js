import React, {Component} from 'react';

// import './HeaderAdmin.css';

class HeaderAdmin extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isLogin: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.logout = this.logout.bind(this);
        this.backToUserView = this.backToUserView.bind(this);
    }

    componentDidMount() {
        if (document.cookie.split(";")[0] !== "token=") {
            this.setState({isLogin: true});
        }
    }

    handleClick(e) {
        this.props.setPage(e.target.id);
    }

    backToUserView(){
        window.location.replace("http://localhost:3000");
    }


    logout(){
        document.cookie = "token =";
        this.setState({isLogin: false})
        window.location.reload(true);
    }

    render() {
        if(this.state.isLogin === false) {
            return (
                <div className="row">
                    <nav
                        className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">


                        <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit" id="Register" onClick={this.backToUserView}>Opuść panel</button>
                    </nav>
                </div>
            );
        }else{
            return(
                <nav
                    className="navbar navbar-expand-sm bg-dark navbar-dark w-100 d-flex justify-content-between rounded-top">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a id="AddBook" className="nav-link text-danger" href="#" onClick={this.handleClick}>Dodaj książkę</a>
                        </li>

                        <li className="nav-item active">
                            <a id="RemoveBook" className="nav-link text-danger" onClick={this.handleClick}>Usuń książkę</a>
                        </li>
                        <li className="nav-item active">
                            <a id="Support" className="nav-link text-danger" onClick={this.handleClick}>Wiadomości od kientów</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-warning my-2 my-sm-0 text-danger" type="submit" onClick={this.logout}>Wyloguj się</button>

                </nav>
            );
        }
    }
}

export default HeaderAdmin;
