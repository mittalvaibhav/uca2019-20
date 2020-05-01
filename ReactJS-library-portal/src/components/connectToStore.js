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
                    return <ActualReactComponent {...args[0](customStoreState)} {...args[1](this.dispatchNewState)} />
                } else {
                    return <ActualReactComponent {...args[0](customStoreState)} />
                }
            }

            dispatchNewState = (newState) => {
                updateGlobalStore(newState);
                this.setState(newState);
            }
        }       
    }
}

var customStoreState = {}
function updateGlobalStore(updatedValueObject) {
    customStoreState = Object.assign({}, customStoreState, updatedValueObject)
    console.log("The globel store is: ", JSON.stringify(customStoreState));
} 