import { SET_SELECTED_BOOK_NAME, SET_BOOKS_LIST } from './actionTypes';

export const setBookName = (selectedBookName) => {
    return {
        type: SET_SELECTED_BOOK_NAME,
        selectedBookName: selectedBookName
    }
}

export const setBooksList = (booksList) => {
    return {
        type: SET_BOOKS_LIST,
        booksList: booksList
    }
}