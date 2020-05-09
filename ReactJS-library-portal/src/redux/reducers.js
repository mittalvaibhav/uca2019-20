import { SET_SELECTED_BOOK_NAME, SET_BOOKS_LIST } from './actionTypes';

const initialState = {
    bookList: [],
    selectedBookName: ""
}

export function booksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_BOOK_NAME:
            return Object.assign({}, state, { selectedBookName: action.selectedBookName })
        case SET_BOOKS_LIST:
             return Object.assign({}, state, {booksList: action.booksList})
        default:
            return state
    }
}