import { SET_BOOKS_COUNT, SET_RECENTS_BOOKS_LIST } from './actionTypes'
// export const fetchRecentBooksList = () => {
//     fetch('http://localhost:8080/books')
//         .then(res => {
//             return res.json()
//         })
//         .then(res => {
//             console.log(res);
//             store.dispatch(setRecentBooksList(res))
//             this.setState({ bookList: res });
//             console.log(this.state.bookList)
//         })
//         .catch(res => {
//             console.log(`The error is : ${JSON.stringify(res)}`)
//         })
// }

// /*
//  * Action creators 
//  */
// export const setRecentBooksList = (booksList) => {
//     return {
//         type: SET_RECENTS_BOOKS_LIST,
//         bookList: booksList
//     }
// }

/*
 * Action creators 
 */
export const setBooksCount = (count) => ({
    type: SET_BOOKS_COUNT,
    count: count
})
