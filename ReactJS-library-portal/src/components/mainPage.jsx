import React, { Component } from 'react';
import Navbar from './navbar';
import RecentBooksList from './recentBooksList'
import EditBook from './editBook';
import AddBook from './addBook';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./../index.css";

class MainPage extends Component {
    constructor() {
        super()
        console.log("Constructor is called");
        this.selectedPhoto = null;
    }

    componentDidMount() {
        console.log("mainpage Component is mounted");
    }

    state = {
        bookList: []
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <div className="col-md-8">
                        <Route exact path="/" render={(props) => <RecentBooksList bookList={this.state.bookList} sendSelectedBook={this.selectBook} deleteBook={this.deleteBook} fetchBooksList={this.fetchBooksList} />} />
                        <Route path="/add" render={(props) => <AddBook addBook={this.addBook} />} />
                        <Route path="/edit" render={(props) => <EditBook book={this.state.selectedBookForEdit} editBook={this.editBook} />} />
                    </div>
                </Router>
            </div>
        )
    }

    fetchBooksList = () => {
        fetch('http://localhost:3000/bookList')
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res);
                this.setState({ bookList: res });
                console.log(this.state.bookList)
            })
    }

    selectBook = (book) => {
        this.setState({ selectedBookForEdit: book });
    }

    addBook = (newBook) => {
        console.log("The nely added book is: ", newBook)
        fetch('http://localhost:3000/bookList', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(res => {
                alert(`New book: ${JSON.stringify(res)} added successfully`);
            })
    }

    editBook = (book) => {
        // let bookList = this.state.bookList.filter((book) => book.id != newBook.id);
        // bookList.push(newBook);
        // this.setState({ bookList: bookList })
        // console.log("State in SYNC call is: ", this.state.bookList);
        // setTimeout(() => {
        //     console.log("State in ASYNC call is: ", this.state.bookList);
        // }, 0)

        console.log('Updating book')
        fetch(`http://localhost:3000/bookList/${book.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
            .then(res => {
                if (res.ok) return res.json()
            })
            .then(res => {
                alert(`Book ${res} updated successfully `)
                console.error(`Book updated successully`)
            })
            .catch(error => {
                console.error(`Error updating book: ${error}`)
            })
    }

    deleteBook = (book) => {
        console.log(`Book to be delete is: ${JSON.stringify(book)}`)
        console.log(this);

        fetch(`http://localhost:3000/bookList/${book.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    console.log(`${book} is deleted`);
                    this.fetchBooksList();
                    // return res.json()
                }
            })
            .catch(error => {
                console.log(`The error is: ${error}`)
            })
    }

}

export default MainPage;
