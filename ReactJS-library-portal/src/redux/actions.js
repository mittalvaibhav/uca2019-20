import { SET_SELECTED_BOOK_NAME, SET_BOOKS_LIST } from './actionTypes';

export const setBookName = (selectedBookName) => {
    return {
        type: SET_SELECTED_BOOK_NAME,
        selectedBookName: selectedBookName
    }
}

export function fetchBooksList() {
    return function (dispatch) {
        return fetch('http://localhost:8080/books')
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    console.log(res);
                    dispatch(setBooksList(res))
                })
                .catch(res => {
                    console.log(`The error is : ${JSON.stringify(res)}`)
                })
    }
}

export const setBooksList = (booksList) => {
    return {
        type: SET_BOOKS_LIST,
        booksList: booksList
    }
}