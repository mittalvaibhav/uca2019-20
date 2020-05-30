import React, { Component } from 'react';
import Navbar from './navbar';
import RecentBooksListWithReduxStore from './recentBooksList'
import EditBook from './editBook';
import AddBookWithReduxStore from './addBook';
import NotFound from './notFound';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./../index.css";
import Footer from './footer';
import Protected from './Protected';
import UnProtected from './UnProtected';
import SignUp from './SignUp';
import Login from './Login';
import "./../index.css";
import RecentBooksListComponentWithStore from './RecentBooksListComponentWithStore';
import AddBookComponentWithStore from './AddBookComponentWithStore';
import Counter from './Counter';

class MainPage extends Component {
    constructor() {
        super()
        console.log("Constructor is called");
        this.selectedPhoto = null;
        this.state = {
            bookList: [],
            authenticated: false
        }
        this.name = "Chitkara University"
    }

    componentDidMount() {
        console.log("mainpage Component is mounted");
    }

    render() {
        console.log("Mainpage Component is rendered");

        return (
            <div>
                <Router>
                    <Navbar name={this.name} authenticated={this.state.authenticated} />
                    <div className="col-md-8 offset-md-2">
                        <Switch>
                            <Route exact path="/home" render={(props) => <RecentBooksListWithReduxStore sendSelectedBook={this.selectBook}/>} />
                            {/* <Route exact path="/home" render={(props) => <RecentBooksListComponentWithStore />} /> */}
                            {/* <Route exact path="/home" render={(props) => <RecentBooksList bookList={this.state.bookList} sendSelectedBook={this.selectBook} deleteBook={this.deleteBook} fetchBooksList={this.fetchBooksList} />} /> */}
                            <Route path="/add" render={(props) => <AddBookWithReduxStore />} />
                            <Route path="/edit" render={(props) => <EditBook book={this.state.selectedBookForEdit} editBook={this.editBook} />} />
                            <Route path="/protected" render={(props) => this.state.authenticated ? <Protected /> : <Redirect to='/' />} />
                            <Route path="/signup" render={(props) => <SignUp />} />
                            <Route path="/login" render={(props) => <Login />} />
                            <Route path="/counter" render={(props) => <Counter />} />
                            <Route render={(props) => <NotFound />} />
                        </Switch>
                    </div>
                    <Footer name={this.name} />
                </Router>
            </div>
        )
    }

    selectBook = (book) => {
        this.setState({ selectedBookForEdit: book });
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
        fetch(`http://localhost:8080/books/updateBook`, {
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

        fetch(`http://localhost:8080/books/deleteBook?id=${book._id}`, {
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