import React, {Component} from 'react';
import LoginAdmin from "./login/LoginAdmin";
import AdminAllBooksRemove from "./allBooksRemove/AdminAllBooksRemove";
import AddBook from "./addBooks/AddBook";
import AdminSupport from "./support/AdminSupport";


class ConstElementAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: null,
        }
    }

    componentDidMount() {
        console.log(this.props.page);
    }


    render() {

        if (this.props.page === "RemoveBook") {
            return (
                <div className="container">
                    <AdminAllBooksRemove/>
                </div>
            )
        } else if (this.props.page === "Login") {
            return (
                <div className="container">
                    <LoginAdmin/>
                </div>);
        } else if (this.props.page === "AddBook") {
            return (
                <div className="container">
                    <AddBook/>
                </div>
            )
        }  else if (this.props.page === "Support") {
            return (
                <div className="container">
                    <AdminSupport/>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <AdminAllBooksRemove/>
                </div>
            )
        }
    }
}

export default ConstElementAdmin;
