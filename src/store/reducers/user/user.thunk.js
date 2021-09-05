import UsersService from "../../../api/services/userServices";
import {actions} from "./user.actions";

export const loginAsync = (email, password) => {
    return function (dispatch) {
        dispatch(actions.usersLoadStart());

        UsersService.logIn(email, password)
            .then((response) => {
                    console.log(response.data.data)
                    dispatch(actions.usersLoadSuccess(response.data.data))
                }
            )
            .catch((error) => dispatch(actions.usersLoadError(error.message)));
    };
}


export const registerAsync = (user) => (dispatch) => {
    dispatch(actions.usersLoadStart());

    UsersService.register(user)
        .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.usersLoadError(error.message)));
};