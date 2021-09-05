// import Api from "../Api";
import apiClient from '../../helpers/apiClient'
class UsersService {
    getAllUsers = () => apiClient().get("users");

    logIn = (email, password) => apiClient().post("users/login",{email,password})

    register = (users) => apiClient().post("users/register",users)

}

export default new UsersService();