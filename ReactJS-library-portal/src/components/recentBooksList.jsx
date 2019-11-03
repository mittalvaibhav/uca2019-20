import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./../index.css";

class RecentBooksList extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }
    componentDidMount() {
        console.log(`Props in recent books component: ${this.props}`)
    }

    render() {
        return (
            <div className="row component-margin">
                <div className="col">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Book Id</th>
                                <th>Book Name</th>
                                <th>Version</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.bookList.map(book =>
                                <tr key={book.name}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.version}</td>
                                    <td>
                                        <button className="btn btn-outline-dark mr-2" onClick={() => this.sendSelectedBook(book)}><Link to='/edit'>Edit</Link></button>
                                        <button className="btn btn-outline-dark ml-2" onClick={() => this.delete(book)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    sendSelectedBook(book) {
        this.props.sendSelectedBook(book);
    }
}

export default RecentBooksList;