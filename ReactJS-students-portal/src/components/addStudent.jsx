import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        name: '',
        gpa: '',
        email: ''
    }
    constructor() {
        super();
        console.info("Add student constructor called");
        this.name = "";
        this.gpa = "";
        this.email = "";

    }

    handleGPAChange = (event) => {
        this.setState({ gpa: event.target.value })
    }

    handleEMailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    addStudent = (event) => {
        event.preventDefault();
        this.name = this.refs.name.value;
        /* Here since the setState ie triggered by reactJS event handler onSubmit and not the default one,
        so the setState is Asynchronous */
        this.setState({ name: this.name })
        setTimeout(() => {
            this.props.addStudent(this.state);
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.addStudent}>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Name</label>
                            <input type="text" ref="name" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>GPA</label>
                            <input type="text" value={this.state.gpa} className="form-control" placeholder="GPA" onChange={this.handleGPAChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-8">
                            <label>Email</label>
                            <input type="text" value={this.state.email} className="form-control" placeholder="Email" onChange={this.handleEMailChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;