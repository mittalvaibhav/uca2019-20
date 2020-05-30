import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="row">
          <p>The current counter value is {this.state.counterValue}</p>
        </div>
        <div className="row">
          <button
            className="btn btn-outline-dark mr-2"
            onClick={() => this.increment()}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-dark mr-2"
            onClick={() => this.decrement()}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
