import actionTypes from "./books.actionTypes";


const initialState = {
    isLoading: false,
    books: [],
    errorMessage: null,
    success:false
};


const booksReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.BOOKS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                success: false,
                // books: [],
                errorMessage: null,
            };

        case actionTypes.BOOKS_LOAD_SUCCESS:
            return {
                errorMessage: null,
                isLoading: false,
                books:[...state.books,...payload].filter((thing, index) => {
                    const _thing = JSON.stringify(thing);
                    return index === [...state.books,...payload].findIndex(obj => {
                        return JSON.stringify(obj) === _thing;
                    });
                }),
                // books: [...state.books,...payload],
            };

        case actionTypes.BOOKS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            };
        case actionTypes.BOOKS_ADD_NEW:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                success: true
            };

        default:
            return state;
    }
};

export default booksReducer;