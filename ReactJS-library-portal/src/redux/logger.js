export const logger = store => next => action => {
    console.log("Dispatching action: ", action)
    let result = next(action);
    console.log(`The new state is : `, store.getState())
    return result
}