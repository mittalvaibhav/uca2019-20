import React, { Component } from 'react';

export function connectToStore(...args) {
    return (ActualReactComponent) => {
        return class extends Component {
            constructor() {
                super();  
                this.state = {};
                console.log(`The initial state is : ${JSON.stringify(this.state)}`)
            }
    
            render() {
                if(args[1]) {
                    return <ActualReactComponent {...args[0](customStoreObject)} {...args[1](this.dispatchNewState)}/>
                } else {
                    return <ActualReactComponent {...args[0](customStoreObject)} />
                }
            }

            dispatchNewState = (newState) => {
                updateCustomStoreObject(newState)
                this.setState(newState)
            }
        }       
    }
}

var customStoreObject = {};
function updateCustomStoreObject(newState) {
    customStoreObject = Object.assign({}, customStoreObject, newState)
} 