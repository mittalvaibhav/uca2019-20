import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './../index.css';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.name = "";
        this.author = "";
        this.version = "";
        this.state = {
            book: {
                name: '',
                author: '',
                version: '',
            },
            redirectToHome: false
        }
        console.log("Component: Add book component ", "Method: constructor ", `props: ${JSON.stringify(this.props)}`);
    }

    handleAuthorChange = (event) => {
        this.setState({ book: { ...this.state.book, author: event.target.value } })
    }

    handleVersionChange = (event) => {
        this.setState({ book: { ...this.state.book, version: event.target.value } })
    }

    handleImageChange = (event) => {
        console.log(`The files are : ${event.target.files[0]}`)
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to='/' />
        }

        return (
            <div className="container">
                <form onSubmit={this.addBook}>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Name</label>
                            <input type="text" ref="name" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Author</label>
                            <input type="text" value={this.state.author} className="form-control" placeholder="Author" onChange={this.handleAuthorChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Version</label>
                            <input type="text" value={this.state.version} className="form-control" placeholder="Email" onChange={this.handleVersionChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

    addBook = (event) => {
        event.preventDefault();
        this.name = this.refs.name.value;
        /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
        so the setState is Asynchronous */
        this.setState({ book: { ...this.state.book, name: this.name } })
        setTimeout(() => {
            fetch('http://localhost:8080/addBook', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state.book)
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(res => {
                    alert(`New book: ${JSON.stringify(res)} added successfully`);
                    this.setState({ redirectToHome: true });
                    // this.props.history.push("/home");
                })
        })
    }
}

export default AddBook;