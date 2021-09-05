import actionTypes from "./books.actionTypes";

const booksLoadStart = () => ({
    type: actionTypes.BOOKS_LOAD_START,
    payload: [],

});

const booksLoadSuccess = (books) => ({
    type: actionTypes.BOOKS_LOAD_SUCCESS,
    payload: books,
});

const booksAddNewSuccess = (books) => ({
    type: actionTypes.BOOKS_ADD_NEW,
    // payload: s,
});

const booksLoadError = (errorMessage) => ({
    type: actionTypes.BOOKS_LOAD_ERROR,
    payload: errorMessage,
});

export const actions= {
    booksLoadStart,
    booksLoadSuccess,
    booksAddNewSuccess,
    booksLoadError,
};