import React, { Component } from 'react';
import MainPage from './components/mainPage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col padding-0">
                        <MainPage />
                    </div>
                </div>

            </div >
        )
    }
}

export default App;