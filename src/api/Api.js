import axios from "axios";



var token =JSON.parse(localStorage.getItem('currentUser'))?JSON.parse(localStorage.getItem("currentUser")).token:''

export default axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    // headers: {'Authorization':'Bearer '+token }
});