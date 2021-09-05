import actionTypes from "./user.actionTypes";


const initialState = {
    isLoading: false,
    user: null,
    isLogged:false,
    errorMessage: null,
};


const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.USERS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                user: null,
                errorMessage: null,
            };

        case actionTypes.USERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                user: payload,
            };

        case actionTypes.USERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                isLogged: false,
                errorMessage: payload,
            };

        default:
            return state;
    }
};

export default userReducer;