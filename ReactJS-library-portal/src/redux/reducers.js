import { SET_SELECTED_BOOK_NAME, SET_BOOKS_LIST, SET_LIBRARY_NAME } from './actionTypes';

const initialStateBooks = {
    bookList: [],
    selectedBookName: ""
}

export function booksReducer(state = initialStateBooks, action) {
    switch (action.type) {
        case SET_SELECTED_BOOK_NAME:
            return Object.assign({}, state, { selectedBookName: action.selectedBookName })
        case SET_BOOKS_LIST:
             return Object.assign({}, state, {booksList: action.booksList})
        default:
            return state
    }
}

const initialStateLibrary = {
    libraryName: ""
}

export function libraryReducer(state = initialStateLibrary, action) {
    switch (action.type) {
        case SET_LIBRARY_NAME:
            return Object.assign({}, state, { libraryName: action.libraryName })
        default:
            return state
    }
}
