import { SET_RECENTS_BOOKS_LIST, SET_BOOKS_COUNT } from './actionTypes';

const initialState = {
    bookList: [],
    count: 0
}

export function booksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RECENTS_BOOKS_LIST:
            return Object.assign({}, initialState, { bookList: action.bookList })
        case SET_BOOKS_COUNT:
            return Object.assign({}, initialState, { count: action.count })
        default:
            return state
    }
}