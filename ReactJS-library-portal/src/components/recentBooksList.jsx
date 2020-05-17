import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./../index.css";
import { connect } from 'react-redux';
import { setBookName, fetchBooksList } from './../redux/actions';

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
                                this.props.booksList ? this.props.booksList.map(book =>
                                    <tr key={book._id}>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.version}</td>
                                        <td>
                                            <button className="btn btn-outline-dark mr-2" onClick={() => this.sendSelectedBook(book)}><Link to='/edit'>Edit</Link></button>
                                            <button className="btn btn-outline-dark ml-2" onClick={() => this.props.deleteBook(book)}>Delete</button>
                                        </td>
                                    </tr>
                                ) : null
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
        selectedBookName: state.booksReducer.selectedBookName,
        booksList: state.booksReducer.booksList
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        setBookName: () => { 
            // Add some api calling logic here and fetch the bookList 
            let bookNameFromServer = "Book3";
            dispatch(setBookName(bookNameFromServer))
        },
        setBooksList: () => {
            dispatch(fetchBooksList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentBooksList);