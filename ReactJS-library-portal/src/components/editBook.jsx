import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class EditBook extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="component-margin">
                <form onSubmit={this.editBook}>
                    <div className="form form-row">
                        <div className="form-group col-md-6">
                            <label>Book Name</label>
                            <input type="text" ref="name" defaultValue={this.props.book.name} className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Book Author</label>
                            <input type="text" ref="author" defaultValue={this.props.book.author} className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Book Version</label>
                            <input type="text" ref="version" defaultValue={this.props.book.version} className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>
        )
    }

    editBook = (event) => {
        event.preventDefault();
        let book = {
            _id: this.props.book._id,
            name: this.refs.name.value,
            author: this.refs.author.value,
            version: this.refs.version.value,
        }
        this.props.editBook(book);
    }
}

export default EditBook;