import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./../index.css";
import { connect } from 'react-redux';
import { setBookName, setBooksList } from './../redux/actions';

class RecentBooksList extends Component {

    constructor(props) {
        super(props);
        this.componentName = "RecentBooksList"
    }

    componentDidMount() {
        this.props.setBookName();
        this.props.setBooksList();
        // this.props.fetchBooksList();
    }

    componentDidUpdate() {
        console.log("Recent Books List Component is updated");
    }

    componentWillUnmount() {
        console.log("Recent Books List Component will unmount now");
    }

    render() {
        console.log(`Recent Books render method is called`);
        return (
            <div className="row component-margin">
                <div className="col">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Book Author</th>
                                <th>Book Version</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.bookList ? this.props.bookList.map(book =>
                                    <tr key={book.id}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.version}</td>
                                        <td>
                                            <button className="btn btn-outline-dark mr-2" onClick={() => this.sendSelectedBook(book)}><Link to='/edit'>Edit</Link></button>
                                            <button className="btn btn-outline-dark ml-2" onClick={() => this.props.deleteBook(book)}>Delete</button>
                                        </td>
                                    </tr>
                                ) : ``
                            }
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

function mapStateToProps(state) {
    return {
        selectedBookName: state.selectedBookName,
        booksList: state.booksList
    } 
}

function mapDispatchToProps(dispatchNewState) {
    return {
        setBookName: () => { 
            // Add some api calling logic here and fetch the bookList 
            let bookNameFromServer = "Book3";
            dispatchNewState(setBookName(bookNameFromServer))
        },
        setBooksList: () => {
            fetch('http://localhost:8080/books')
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    console.log(res);
                    dispatchNewState(setBooksList(res))
                })
                .catch(res => {
                    console.log(`The error is : ${JSON.stringify(res)}`)
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentBooksList);