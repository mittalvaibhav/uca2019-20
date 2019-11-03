import React, { Component } from 'react';

class AddBook extends Component {
    state = {
        name: '',
        author: '',
        version: ''
    }
    constructor() {
        super();
        this.name = "";
        this.author = "";
        this.version = "";
    }

    handleAuthorChange = (event) => {
        this.setState({ author: event.target.value })
    }

    handleVersionChange = (event) => {
        this.setState({ version: event.target.value })
    }

    addBook = (event) => {
        event.preventDefault();
        this.name = this.refs.name.value;
        /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
        so the setState is Asynchronous */
        this.setState({ name: this.name })
        setTimeout(() => {
            this.props.addBook(this.state);
        })
    }

    render() {
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
}

export default AddBook;