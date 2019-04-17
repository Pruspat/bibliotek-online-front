import React, {Component} from 'react';
import LoginAdmin from "./login/LoginAdmin";
import AdminAllBooksRemove from "./allBooksRemove/AdminAllBooksRemove";
import AddBook from "./addBooks/AddBook";
import AdminSupport from "./support/AdminSupport";
import ReturnBorrow from "./ReturnBorrow/ReturnBorrow";
import AllUsers from "./allUsers/AllUsers";
import AllUsersSalary from "./Salary/AllUsersSalary";
import SetWorkerTask from "./setWorkerTAsks/SetWorkerTask";


class ConstElementAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: null,
        }
    }

    componentDidMount() {
        console.log("const element admin start page: " + this.props.pageForRole);
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
        } else if (this.props.page === "Support") {
            return (
                <div className="container">
                    <AdminSupport/>
                </div>
            )
        } else if (this.props.page === "Return") {
            return (
                <div className="container">
                    <ReturnBorrow/>
                </div>
            )

        } else if (this.props.page === "Users") {
            return (
                <div className="container">
                    <AllUsers/>
                </div>
            )
        }  else if (this.props.page === "AllUsersSalary") {
            return (
                <div className="container">
                    <AllUsersSalary/>
                </div>
            )
        }   else if (this.props.page === "SetTask") {
            return (
                <div className="container">
                    <SetWorkerTask/>
                </div>
            )
        } else if(this.props.pageForRole === "worker") {
            return (
                <div className="container">
                    <AdminSupport/>
                </div>
            )
        }else if(this.props.pageForRole === "admin") {
            return (
                <div className="container">
                    <AllUsers/>
                </div>
            )
        }else if(this.props.pageForRole === "kierownik") {
            return (
                <div className="container">
                    <AllUsersSalary/>
                </div>
            )
        }
    }
}

export default ConstElementAdmin;
