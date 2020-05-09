import React, { Component } from 'react';
import { connectToStore } from './connectToStore';

class RecentBookListComponentWithStore extends Component {

    constructor(props) {
        super(props)

        // selectedBookName, bookList
    }

    componentDidMount() {
        this.props.setBookName();
        this.props.setBooksList();
    }
    
    componentDidUpdate() {
        console.log("Recent Books List component updated");
    }

    render() {
        console.log(`The input props are: ${JSON.stringify(this.props)}`)
        return (
            <div className="row component-margin">
                <div className="col">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Book Author</th>
                                <th>Book Version</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.booksList ? this.props.booksList.map(book =>
                                <tr key={book.id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.version}</td>
                                </tr>
                            ) : <div></div>}
                        </tbody>
                    </table>
                </div>
            </div>
        )
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
            dispatchNewState({selectedBookName: bookNameFromServer})
            // this.setState({selectedBookName : bookNameFromServer})
            // return {selectedBookName : bookNameFromServer}
        },
        setBooksList: () => {
            fetch('http://localhost:8080/books')
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    console.log(res);
                    dispatchNewState({booksList: res})
                })
                .catch(res => {
                    console.log(`The error is : ${JSON.stringify(res)}`)
                })
        }
    }
}

export default connectToStore(mapStateToProps, mapDispatchToProps)(RecentBookListComponentWithStore);

