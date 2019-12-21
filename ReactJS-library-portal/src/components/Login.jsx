import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        }
    }

    render() {

        if (this.state.redirectToHome) {
            return <Redirect to='/home' />
        }

        return (
            <div>
                <form onSubmit={this._addUser}>
                    <div className="form form-row">
                        <div className="form-group col-md-6">
                            <label>UserName</label>
                            <input type="text" ref="userName" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" ref="password" className="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div >
        )
    }

    _addUser = (event) => {
        event.preventDefault();
        let user = {
            userName: this.refs.userName.value,
            password: this.refs.password.value
        }

        fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) return res.json()

            })
            .then(res => {
                console.log(`User added successfully: ${res}`)
                this.setState({ redirectToHome: true });
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default Login;