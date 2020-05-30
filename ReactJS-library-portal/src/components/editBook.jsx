import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { setBookName } from './../redux/actions';

const EditBook = (props) => {

    const [selectedBookName, setSelectedBookName] = useState(props.book.name);
    const [selectedAuthorName, setSelectedAuthorName] = useState(props.book.author);

    const nameRef = useRef(props.book.name);
    const authorRef = useRef(props.book.author);
    const versionRef = useRef(props.book.version);

    useEffect(() => {
        console.log("Hook1: Since component is re/rendered, useffect hook is called")
    }, [selectedAuthorName])

    useEffect(() => {
        console.log("Hook2: Since component is re/rendered, useffect hook is called")
    })

    const editBook = (event) => {
        event.preventDefault();
        let book = {
            _id: props.book._id,
            name: nameRef.current.value,
            author: authorRef.current.value,
            version: versionRef.current.value,
        }
        props.editBook(book);
        props.setSelectedBookNameRedux(selectedBookName);
    }
    

    return (
        <div className="component-margin">
            <p>The selected book current name is:: <b>{selectedBookName}</b></p>
            <p>The selected book from redux store is : <b>{props.selectedBookName}</b></p>
            <form onSubmit={editBook}>
                <div className="form form-row">
                    <div className="form-group col-md-6">
                        <label>Book Name</label>
                        <input type="text" ref={nameRef} value={selectedBookName} className="form-control" onChange={(event) => setSelectedBookName(event.target.value)}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Book Author</label>
                        <input type="text" ref={authorRef} defaultValue={props.book.author} className="form-control"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Book Version</label>
                        <input type="text" ref={versionRef} defaultValue={props.book.version} className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedBookName: state.booksReducer.selectedBookName,
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedBookNameRedux: (name) => {
            dispatch(setBookName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);