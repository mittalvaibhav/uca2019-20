import React, { Component } from 'react';

export function connectToStore(...args) {
    return (ActualReactComponent) => {
        return class extends Component {
            constructor() {
                super();  
                this.state = {...args[0]({})};
                console.log(`The initial state is : ${JSON.stringify(this.state)}`)
            }
    
            render() {
                return <ActualReactComponent {...args[0](this.state)} {...args[1](this.dispatchNewState)} />
            }

            dispatchNewState = (newState) => {
                this.setState(newState)
            }
        }       
    }
}