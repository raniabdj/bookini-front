import BooksService from "../../../api/services/booksServices";
import {actions} from "./books.actions";

export const loadBooksAsync = (page, limit) => {
    return (dispatch) => {
        dispatch(actions.booksLoadStart());

        return BooksService.getAllBooks(page, limit)
            .then((response) => {
                    console.log(response)
                    var data = []
                    if (response.data.data['docs'].length > 0) {
                        response.data.data['docs'].map((x, index) => {
                            data.push({...x, id: page === 0 ? index : index + 5 * page})
                        })
                    }
                    dispatch(actions.booksLoadSuccess(data))


                }
            )
            .catch((error) => dispatch(actions.booksLoadError(error.message)));
    };
}
export const addBooksAsync = (book) => {
    return (dispatch) => {
        dispatch(actions.booksLoadStart());

        return BooksService.addNewBook(book)
            .then((response) => {
                    console.log(response)

                    dispatch(actions.booksAddNewSuccess(response))


                }
            )
            .catch((error) => dispatch(actions.booksLoadError(error.message)));
    };
}
export const bookBooksAsync = (book) => {
    return (dispatch) => {
        dispatch(actions.booksLoadStart());

        return BooksService.bookBook(book)
            .then((response) => {
                    console.log(response)
                    dispatch(actions.booksLoadSuccess(response))
                }
            )
            .catch((error) => dispatch(actions.booksLoadError(error.message)));
    };
}
